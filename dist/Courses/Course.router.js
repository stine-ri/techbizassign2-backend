"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRegistrationRouter = void 0;
const hono_1 = require("hono");
const Course_controller_1 = require("./Course.controller");
const mailer_1 = require("../mailer"); // Import the mail function
exports.courseRegistrationRouter = new hono_1.Hono();
//get all courseRegistrations
exports.courseRegistrationRouter.get("/courseRegistrations", Course_controller_1.listcourseRegistrations);
//get a single therapist   api/therapist/1
exports.courseRegistrationRouter.get("/courseRegistrations/:id", Course_controller_1.getcourseRegistrations);
// create a therapist 
exports.courseRegistrationRouter.post("/courseRegistrations", async (c) => {
    try {
        const data = await c.req.json();
        console.log("Received Data:", data);
        // Send confirmation email
        await (0, mailer_1.sendEmail)(data.email, "Course Registration Confirmation", `Hello ${data.fname},\n\nYou have successfully registered for the ${data.courseSelected} course.`, `<p>Hello <b>${data.fname}</b>,</p><p>You have successfully registered for the <b>${data.courseSelected}</b> course.</p>`);
        return c.json({ message: "Registration successful. Confirmation email sent!" });
    }
    catch (error) {
        console.error("Email Sending Error:", error); // 🔴 Log the exact error
        const errorMessage = error.message;
        return c.json({ error: "Registration failed. Could not send email.", details: errorMessage }, 500);
    }
});
//update a therapist
exports.courseRegistrationRouter.put("/courseRegistrations/:id", Course_controller_1.updatecourseRegistrations);
exports.courseRegistrationRouter.delete("/courseRegistrations/:id", Course_controller_1.deletecourseRegistrations);
//node mailer
// ✅ Test route to send an email
exports.courseRegistrationRouter.get("/test-email", async (c) => {
    try {
        const testRecipient = "christinenyambwari@gmail.com"; // Replace with your email
        await (0, mailer_1.sendEmail)(testRecipient, "Test Email from Hono 🚀", "This is a test email sent from Hono backend using Nodemailer.", `<p>This is a <b>test email</b> sent from Hono backend using <b>Nodemailer</b>.</p>`);
        return c.json({ message: "Test email sent successfully!" });
    }
    catch (error) {
        return c.json({ error: "Failed to send test email" }, 500);
    }
});
