import AWS from "aws-sdk";
import { fromSSO } from "@aws-sdk/credential-provider-sso";

export const dbClient = async () => {
  const dbCredentials = await fromSSO({
    ssoStartUrl: process.env.SSO_START_URL,
    ssoAccountId: process.env.SSO_ACCOUNT_ID,
    ssoRegion: "us-east-2",
    ssoRoleName: "DatabaseAdministrator",
  })();

  const db = new AWS.DynamoDB({ credentials: dbCredentials });
  return new AWS.DynamoDB.DocumentClient({ service: db });
};
