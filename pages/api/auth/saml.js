import axios from "axios";
import { sp, idp } from "../../../utils/samlProviders";

export default async (req, res) => {
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

  const createLoginRequestUrl = (idp, options = {}) =>
    new Promise((resolve, reject) => {
      sp.create_login_request_url(idp, options, (error, loginUrl) => {
        if (error) {
          reject(error);
        }
        resolve(loginUrl);
      });
    });

  try {
    const loginUrl = await createLoginRequestUrl(idp);
    return res.redirect(loginUrl);
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
};
