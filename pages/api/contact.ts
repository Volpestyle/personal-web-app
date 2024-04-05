import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "utils/sdk";

// https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  sendEmail(req.body.message)
    .then((sendEmailResponse) => {
      res.status(200).send({ sendEmailResponse });
    })
    .catch((err) => {
      res.status(err.name);
      res.send(err);
    });
};

export default handler;
