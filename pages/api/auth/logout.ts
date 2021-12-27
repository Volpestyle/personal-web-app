import { NextApiResponse, NextApiRequest } from "next";
import samlProviders from "../../../utils/samlProviders";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { sp, idp } = await samlProviders();
    var options = {
      name_id: req.body.name_id,
      session_index: req.body.session_index,
    };
    sp.create_logout_request_url(
      idp,
      options,
      (err: any, logout_url: string) => {
        if (err != null) return res.send(500);
        res.redirect(logout_url);
      }
    );
  }
};

export default handler;
