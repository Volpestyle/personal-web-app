import NextAuth, { User } from "next-auth";
import { getToken } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { IdentityProvider } from "saml2-js";
import { sp, idp } from "../../../utils/samlProviders";

// Custom SAML provider
const providerOptions: any = {
  id: "saml",
  name: "SAML",
  authorize: async ({ samlBody }: { samlBody: any }) => {
    const _samlBody = JSON.parse(decodeURIComponent(samlBody));
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

export default NextAuth({
  providers: [CredentialsProvider(providerOptions)],
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
