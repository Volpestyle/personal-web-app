// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { DynamoDB } from "aws-sdk";
import { dbClient } from "../../../../utils/creds";

export default async (req: NextApiRequest) => {
  const db = await dbClient();
  if (req.method === "GET") {
    const params: DynamoDB.DocumentClient.GetItemInput = {
      TableName: "SectionContent",
      Key: {
        sectionId: req.query.id,
      },
    };
    return await db.get(params).promise();
  }
  if (req.method === "PUT") {
    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: "SectionContent",
      Item: {
        sectionId: req.query.id,
        ...req.body,
      },
    };
    return await db.put(params).promise();
  }
};
