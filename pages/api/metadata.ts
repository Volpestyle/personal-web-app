import { NextApiResponse, NextApiRequest } from "next";
import samlProviders from "../../utils/samlProviders";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { sp } = await samlProviders();
    res.setHeader("Content-Type", "application/xml");
    res.send(sp.create_metadata());
  }
};

export default handler;
