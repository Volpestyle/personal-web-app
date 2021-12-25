import { ServiceProvider, IdentityProvider } from "saml2-js";
import fs from "fs";
import { env } from "process";

// Service provider
const sp_options = {
  entity_id: "saml-poc",
  private_key: fs.readFileSync("certs/sp-pk.pem").toString(),
  certificate: fs.readFileSync("certs/sp-cert.pem").toString(),
  assert_endpoint: "https://jcvolpe.me/api/auth/saml",
  allow_unencrypted_assertion: true,
};
export const sp = new ServiceProvider(sp_options);

// Identity provider
const idp_options = {
  sso_login_url: process.env.SSO_ENTRY_POINT,
  sso_logout_url: process.env.SSO_EXIT_POINT,
  certificates: [fs.readFileSync("certs/sso_cert.pem").toString()],
};
export const idp = new IdentityProvider(idp_options);
