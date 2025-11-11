// app/utils/mailer.js
import nodemailer from "nodemailer";

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 587;
const SMTP_USER = "vasiltrebickatl@gmail.com"; // the owner’s Gmail (used to authenticate)
const SMTP_PASS = "nhscznytgnnjcyny"; // app password
const OWNER_EMAIL = "vasiltrebickatl@gmail.com";

if (!SMTP_USER || !SMTP_PASS || !OWNER_EMAIL) {
  console.warn(
    "⚠️ Mailer not fully configured! Check SMTP_USER, SMTP_PASS, and OWNER_EMAIL"
  );
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false, // TLS optional for 587
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

export const sendBookingEmails = async ({
  clientEmail,
  ownerMsg,
  clientMsg,
}) => {
  if (!transporter) return;

  try {
    // Send to owner
    await transporter.sendMail({ ...ownerMsg, to: OWNER_EMAIL });

    // Send to client (if provided)
    if (clientEmail) {
      await transporter.sendMail({ ...clientMsg, to: clientEmail });
    }
  } catch (err) {
    console.error("Failed to send booking emails:", err);
  }
};
