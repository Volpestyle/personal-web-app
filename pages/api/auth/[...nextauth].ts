import NextAuth, { User } from "next-auth";
import { getToken } from "next-auth/jwt";
import CredentialsProvider, {
  CredentialInput,
  CredentialsConfig,
} from "next-auth/providers/credentials";
import { IdentityProvider } from "saml2-js";
import samlProviders from "../../../utils/samlProviders";

declare type UserCredentialsConfig<C extends Record<string, CredentialInput>> =
  Partial<Omit<CredentialsConfig<C>, "options">> &
    Pick<CredentialsConfig<C>, "authorize" | "credentials">;

// Custom SAML provider
const getProviderOptions = (): UserCredentialsConfig<
  Record<string, CredentialInput>
> => {
  return {
    id: "saml",
    name: "SAML",
    credentials: {},
    authorize: async (req: Record<string, string> | undefined) => {
      if (!req) return;
      const { sp, idp } = await samlProviders();
      const _samlBody = JSON.parse(decodeURIComponent(req.samlBody));
      const postAssert = (idp: IdentityProvider, samlBody: any) =>
        new Promise((resolve, reject) => {
          sp.post_assert(
            idp,
            {
              request_body: samlBody,
            },
            (error, response) => {
              if (error) reject(error);
              resolve(response);
            }
          );
        });

      try {
        const { user }: any = await postAssert(idp, _samlBody);
        return user;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  };
};

export default NextAuth({
  providers: [CredentialsProvider(getProviderOptions())],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) return user;
      return token;
    },
    async session({ session, user, token }) {
      return session;
    },
  },
});
