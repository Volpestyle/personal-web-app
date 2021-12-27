import {
  ServiceProvider,
  IdentityProvider,
  IdentityProviderOptions,
  ServiceProviderOptions,
} from "saml2-js";
import { streamToString, getS3Files } from "./sdk";
import { GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { Readable } from "stream";

// Define our SAML service (this app) and identity providers (aws sso)
export default async () => {
  const pemData = await getS3Files("jcvolpe-saml-pems", ["certs/sp-pk.pem"], {
    toString: true,
  });
  const sp_options: ServiceProviderOptions = {
    entity_id: "https://jcvolpe.me/api/metadata",
    private_key: pemData[0] as string,
    certificate: process.env.SP_CERT!,
    assert_endpoint: "https://jcvolpe.me/api/auth/saml",
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
