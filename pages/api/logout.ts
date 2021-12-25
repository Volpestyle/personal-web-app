import { NextApiResponse, NextApiRequest } from "next";
import { sp, idp } from "../../utils/samlProviders";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
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
