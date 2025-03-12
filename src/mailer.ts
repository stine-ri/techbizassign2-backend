import nodemailer from "nodemailer";
import "dotenv/config"; // Load environment variables

// Configure the transporter (SMTP settings)
const transporter = nodemailer.createTransport({
  service: "Gmail", // Change if using another provider
  auth: {
    user: process.env.EMAIL_USER, // Securely load from .env
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send an email
export const sendEmail = async (to: string, subject: string, text: string, html?: string) => {
  try {
    const mailOptions = {
      from: `"Course Registration" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
