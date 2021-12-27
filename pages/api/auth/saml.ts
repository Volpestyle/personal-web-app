// https://github.com/Jenyus-Org/next-auth-saml ty :D
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IdentityProvider } from "saml2-js";
import samlProviders from "../../../utils/samlProviders";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Handle POST first since it doesn't require samlProviders https://github.com/Jenyus-Org/next-auth-saml/blob/main/pages/api/auth/login/saml.js
  if (req.method === "POST") {
    const { data, headers } = await axios("/csrf", {
      baseURL: process.env.NEXTAUTH_URL,
    });
    const { csrfToken } = data;
    const encodedSAMLResponse = encodeURIComponent(
      JSON.stringify(req.body.SAMLResponse)
    );

    res.setHeader("set-cookie", headers["set-cookie"] ?? "");
    return res.send(
      `<html>
        <body>
          <form action="/api/auth/callback/saml" method="POST">
            <input type="hidden" name="csrfToken" value="${csrfToken}"/>
            <input type="hidden" name="samlResponse" value="${encodedSAMLResponse}"/>
          </form>
          <script>
            document.forms[0].submit();
          </script>
        </body>
      </html>`
    );
  }

  const { sp, idp } = await samlProviders();
  const createLoginRequestUrl = (
    idp: IdentityProvider,
    options = {}
  ): Promise<string> =>
    new Promise((resolve, reject) => {
      sp.create_login_request_url(idp, options, (error, loginUrl) => {
        if (error) {
          reject(error);
        }
        resolve(loginUrl);
      });
    });

  if (req.method === "GET") {
    createLoginRequestUrl(idp)
      .then((loginUrl) => {
        if (!loginUrl) return res.status(500);
        return res.redirect(loginUrl);
      })
      .catch((err) => {
        console.error(err);
        return res.status(500);
      });
  }
};
