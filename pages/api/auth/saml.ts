// https://github.com/Jenyus-Org/next-auth-saml ty :D
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IdentityProvider } from "saml2-js";
import samlProviders from "../../../utils/samlProviders";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Handle POST first since it doesn't require samlProviders https://github.com/Jenyus-Org/next-auth-saml/blob/main/pages/api/auth/login/saml.js
  if (req.method === "POST") {
    const { data, headers } = await axios("/api/auth/csrf");
    const { csrfToken } = data;
    const encodedSAMLBody = encodeURIComponent(JSON.stringify(req.body));

    res.setHeader("set-cookie", headers["set-cookie"] ?? "");
    return res.send(
      `<html>
        <body>
          <form action="/api/auth/callback/saml" method="POST">
            <input type="hidden" name="csrfToken" value="${csrfToken}"/>
            <input type="hidden" name="samlBody" value="${encodedSAMLBody}"/>
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
