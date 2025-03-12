"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config"); // Load environment variables
// Configure the transporter (SMTP settings)
const transporter = nodemailer_1.default.createTransport({
    service: "Gmail", // Change if using another provider
    auth: {
        user: process.env.EMAIL_USER, // Securely load from .env
        pass: process.env.EMAIL_PASS,
    },
});
// Function to send an email
const sendEmail = async (to, subject, text, html) => {
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
    }
    catch (error) {
        console.error("❌ Error sending email:", error);
        throw new Error("Failed to send email");
    }
};
exports.sendEmail = sendEmail;
