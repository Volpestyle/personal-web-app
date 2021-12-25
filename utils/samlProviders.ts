const { ServiceProvider, IdentityProvider } = require("saml2-js");
const fs = require("fs");

// Service provider
const sp_options = {
  entity_id: "saml-poc",
  private_key: fs.readFileSync("certs/sp-pk.pem").toString(),
  certificate: fs.readFileSync("certs/sp-cert.pem").toString(),
  assert_endpoint: "https://jcvolpe.me/saml/assert",
  allow_unencrypted_assertion: true,
};
export const sp = new ServiceProvider(sp_options);

// Identity provider
const idp_options = {
  sso_login_url:
    "https://portal.sso.us-east-2.amazonaws.com/saml/assertion/ODQyNDM0ODI5MDEyX2lucy1mYWRmYmQ2ZjkyZmQyNTNi",
  sso_logout_url:
    "https://portal.sso.us-east-2.amazonaws.com/saml/logout/ODQyNDM0ODI5MDEyX2lucy1mYWRmYmQ2ZjkyZmQyNTNi",
  certificates: [fs.readFileSync("certs/sso_cert.pem").toString()],
};
export const idp = new IdentityProvider(idp_options);
