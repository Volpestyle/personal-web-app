import AWS from "aws-sdk";
import { fromSSO } from "@aws-sdk/credential-provider-sso";

export const dbCredentials = await fromSSO({
  ssoStartUrl: process.env.SSO_START_URL,
  ssoAccountId: process.env.SSO_ACCOUNT_ID,
  ssoRegion: "us-east-2",
  ssoRoleName: "DatabaseAdministrator",
})();

export const db = new AWS.DynamoDB({ credentials: dbCredentials });
export const dbClient = new AWS.DynamoDB.DocumentClient({ service: db });
