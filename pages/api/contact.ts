import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "volpestylegfx@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData: Mail.Options = {
    from: req.body.email,
    to: "volpestyle@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(info);
      res.status(200).json({ info });
    }
  });
};

export default handler;
