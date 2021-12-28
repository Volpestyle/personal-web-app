import {
  ServiceProvider,
  IdentityProvider,
  IdentityProviderOptions,
  ServiceProviderOptions,
} from "saml2-js";
import { getS3Files } from "./sdk";
import fs from "fs";

export type SSOUser = {
  attributes: Record<string, string[]>;
  name_id: string;
  session_index: string;
};

/**
 * Define our SAML service (this app) and identity providers (aws sso)
 * Pulls private key from s3. When in dev, will use local file.
 */
export default async () => {
  let privateKey;
  if (process.env.NODE_ENV !== "production") {
    privateKey = fs.readFileSync("./certs/localhost-key.pem");
  } else {
    const res = await getS3Files(
      "jcvolpe-saml-pems",
      [process.env.SP_PK_FILENAME!],
      {
        toString: true,
      }
    );
    privateKey = res[0];
  }
  const sp_options: ServiceProviderOptions = {
    entity_id: process.env.SP_ENTITY_ID!,
    private_key: privateKey as string,
    certificate: process.env.SP_CERT!,
    assert_endpoint: process.env.SP_ASSERT_ENDPOINT!,
    nameid_format: "urn:oasis:names:tc:SAML:2.0:nameid-format:transient",
    allow_unencrypted_assertion: true,
  };
  const idp_options: IdentityProviderOptions = {
    sso_login_url: process.env.SSO_ENTRY_POINT!,
    sso_logout_url: process.env.SSO_EXIT_POINT!,
    certificates: [process.env.SSO_CERT!, process.env.SP_CERT!],
  };
  return {
    sp: new ServiceProvider(sp_options),
    idp: new IdentityProvider(idp_options),
  };
};
