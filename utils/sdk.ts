import { fromTemporaryCredentials } from "@aws-sdk/credential-providers";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { S3Client } from "@aws-sdk/client-s3";

const params = {
  RoleArn: "arn:aws:iam::842434829012:role/jcvolpe.me-sdk",
};

export const dbClient = new DynamoDBClient({
  region: "us-east-2",
  credentials: fromTemporaryCredentials({
    params,
  }),
});

export const s3Client = new S3Client({
  region: "us-east-2",
  credentials: fromTemporaryCredentials({
    params,
  }),
});
