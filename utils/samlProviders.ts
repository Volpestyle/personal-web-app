import {
  ServiceProvider,
  IdentityProvider,
  IdentityProviderOptions,
  ServiceProviderOptions,
} from "saml2-js";
import fs from "fs";

// Service provider
const sp_options: ServiceProviderOptions = {
  entity_id: "saml-poc",
  private_key: fs.readFileSync("certs/sp-pk.pem").toString(),
  certificate: fs.readFileSync("certs/sp-cert.pem").toString(),
  assert_endpoint: "https://jcvolpe.me/api/auth/saml",
  allow_unencrypted_assertion: true,
};
export const sp = new ServiceProvider(sp_options);

// Identity provider
const idp_options: IdentityProviderOptions = {
  sso_login_url: process.env.SSO_ENTRY_POINT!,
  sso_logout_url: process.env.SSO_EXIT_POINT!,
  certificates: [fs.readFileSync("certs/sso_cert.pem").toString()],
};
export const idp = new IdentityProvider(idp_options);
