import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { CredentialsProvider } from "next-auth/providers";
import { sp, idp } from "../../../utils/samlProviders";

export default NextAuth({
  providers: [
    Providers.Credentials({
      id: "saml",
      name: "SAML",
      authorize: async ({ samlBody }) => {
        const _samlBody = JSON.parse(decodeURIComponent(samlBody));
        const postAssert = (idp, samlBody) =>
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
          const { user } = await postAssert(idp, _samlBody);
          return user;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: (token, user) => {
      if (user) {
        return {
          user,
        };
      }
      return token;
    },
    session: (session, { user }) => {
      return {
        ...session,
        user,
      };
    },
  },
});
