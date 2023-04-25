const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SMTP_HOST,
    port: process.env.MAIL_SMTP_PORT,
    auth: {
      user: process.env.MAIL_SMTP_MAIL,
      pass: process.env.MAIL_SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
