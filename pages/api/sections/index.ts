// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { DynamoDB } from "aws-sdk";
import { dbClient } from "../../../utils/creds";

export default async (req: NextApiRequest) => {
  const db = await dbClient();
  if (req.method === "GET") {
    const params: DynamoDB.DocumentClient.ScanInput = {
      TableName: "SectionContent",
    };
    return await db.scan(params).promise();
  }
};
