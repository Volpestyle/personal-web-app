import {
  ServiceProvider,
  IdentityProvider,
  IdentityProviderOptions,
  ServiceProviderOptions,
} from "saml2-js";
import { s3Client, streamToString } from "./sdk";
import {
  GetObjectCommand,
  GetObjectCommandInput,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { Readable } from "stream";

// Get private key and certificate pems needed for SAML from s3 bucket
const getFiles = () => {
  const pems = ["sp-pk.pem", "sp-cert.pem", "sso-jcvolpe-metadata.xml"];
  const getObjectRequests = pems.map((pemName) => {
    const getObjectRequest: GetObjectCommandInput = {
      Bucket: "jcvolpe-saml-pems",
      Key: `certs/${pemName}`,
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

// Define our SAML service (this app) and identity providers (aws sso)
export default async () => {
  const fileData = await getFiles();
  const files2Strings = fileData.map(
    async (res: GetObjectCommandOutput): Promise<string> =>
      await streamToString(res.Body as Readable)
  );
  const fileStrings = await Promise.all(files2Strings);
  console.log(fileStrings[2]);
  const sp_options: ServiceProviderOptions = {
    entity_id: "https://jcvolpe.me/api/metadata",
    private_key: fileStrings[0],
    certificate: fileStrings[1],
    assert_endpoint: "https://jcvolpe.me/api/auth/saml",
    allow_unencrypted_assertion: true,
  };
  const idp_options: IdentityProviderOptions = {
    sso_login_url: process.env.SSO_ENTRY_POINT!,
    sso_logout_url: process.env.SSO_EXIT_POINT!,
    certificates: [fileStrings[2]],
  };
  return {
    sp: new ServiceProvider(sp_options),
    idp: new IdentityProvider(idp_options),
  };
};
