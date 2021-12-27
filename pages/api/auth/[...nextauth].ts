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
      const samlResponse = JSON.parse(decodeURIComponent(req.samlResponse));
      const postAssert = (idp: IdentityProvider, samlResponse: any) =>
        new Promise((resolve, reject) => {
          sp.post_assert(
            idp,
            {
              request_body: {
                SAMLResponse: samlResponse,
              },
            },
            (error, response) => {
              if (error) reject(error);
              resolve(response);
            }
          );
        });

      try {
        const postAssertResponse: any = await postAssert(idp, samlResponse);
        return postAssertResponse;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  };
};

export default NextAuth({
  providers: [CredentialsProvider(getProviderOptions())],
  // NextAuth secret required in prod https://next-auth.js.org/configuration/options#secret
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});
