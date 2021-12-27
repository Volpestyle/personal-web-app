import {
  ServiceProvider,
  IdentityProvider,
  IdentityProviderOptions,
  ServiceProviderOptions,
} from "saml2-js";
import { s3Client } from "./sdk";
import {
  GetObjectCommand,
  GetObjectCommandInput,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";

// Get private key and certificate pems needed for SAML
const getPems = () => {
  const pems = ["sp-pk", "sp-cert", "sso-idp-cert"];
  const getObjectRequests = pems.map((pemName) => {
    const getObjectRequest: GetObjectCommandInput = {
      Bucket: "jcvolpe-saml-pems",
      Key: `certs/${pemName}.pem`,
    };
    return getObjectRequest;
  });
  const promises: Promise<GetObjectCommandOutput>[] = getObjectRequests.map(
    (req) => {
      const getObject = new GetObjectCommand(req);
      return s3Client.send(getObject);
    }
  );
  return Promise.all(promises);
};

// SAML providers
export default async () => {
  const pemData = await getPems();
  const pems = pemData.map((res: GetObjectCommandOutput): any => res.Body);
  const sp_options: ServiceProviderOptions = {
    entity_id: "jcvolpe.me",
    private_key: pems[0].toString(),
    certificate: pems[1].toString(),
    assert_endpoint: "https://jcvolpe.me/api/auth/saml",
    allow_unencrypted_assertion: true,
  };
  const idp_options: IdentityProviderOptions = {
    sso_login_url: process.env.SSO_ENTRY_POINT!,
    sso_logout_url: process.env.SSO_EXIT_POINT!,
    certificates: [pems[2].toString()],
  };
  return {
    sp: new ServiceProvider(sp_options),
    idp: new IdentityProvider(idp_options),
  };
};
