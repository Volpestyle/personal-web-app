import { fromTemporaryCredentials } from "@aws-sdk/credential-providers";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  GetObjectCommand,
  GetObjectCommandInput,
  GetObjectCommandOutput,
  GetObjectOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { Readable } from "stream";
import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput,
  SendEmailCommandOutput,
} from "@aws-sdk/client-ses";

const params = {
  RoleArn: process.env.TEMP_CREDENTIALS_ROLE_ARN,
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

export const sesClient = new SESClient({
  region: "us-east-2",
  credentials: fromTemporaryCredentials({
    params,
  }),
});

// Send email
type sendEmailOptions = {};
export const sendEmail = async (
  htmlMessage: string
): Promise<SendEmailCommandOutput> => {
  const input: SendEmailCommandInput = {
    Source: "volpestyle@gmail.com",
    Destination: {
      ToAddresses: ["volpestyle@gmail.com"],
    },
    Message: {
      Subject: {
        Data: "UTF-8",
        Charset: "New message from jcvolpe.me",
      },
      Body: {
        Html: {
          Data: "UTF-8",
          Charset: htmlMessage,
        },
      },
    },
  };
  const command = new SendEmailCommand(input);
  return await s3Client.send(command);
};

// Batch getObject
type getS3FilesOptions = {
  toString: boolean;
};
export const getS3Files = async (
  bucketName: string,
  keys: string[],
  options: Partial<getS3FilesOptions> = {}
): Promise<GetObjectOutput[] | string[]> => {
  const promises: Promise<GetObjectCommandOutput>[] = keys.map((key) => {
    const getObjectRequest: GetObjectCommandInput = {
      Bucket: bucketName,
      Key: key,
    };
    return s3Client.send(new GetObjectCommand(getObjectRequest));
  });
  if (!options.toString) return Promise.all(promises);
  const fileData = await Promise.all(promises);
  const files2Strings = fileData.map(
    async (res: GetObjectCommandOutput): Promise<string> =>
      await streamToString(res.Body as Readable)
  );
  return Promise.all(files2Strings);
};

/**
 * Takes a readable object and converts to string
 * Courtesy of https://github.com/aws/aws-sdk-js-v3/issues/1877#issuecomment-755430937
 * @param stream
 * @returns
 */
export const streamToString = (stream: Readable): Promise<string> =>
  new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
