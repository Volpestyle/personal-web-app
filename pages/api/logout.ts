import { NextApiResponse, NextApiRequest } from "next";
import samlProviders from "../../utils/samlProviders";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { sp, idp } = await samlProviders();
  var options = {
    name_id: "name_id",
    session_index: "session_index",
  };
  sp.create_logout_request_url(idp, options, (err: any, logout_url: string) => {
    if (err != null) return res.send(500);
    res.redirect(logout_url);
  });
};

export default handler;
