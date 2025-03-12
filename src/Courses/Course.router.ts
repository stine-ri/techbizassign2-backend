import { Hono } from "hono";
import { listcourseRegistrations,getcourseRegistrations , createcourseRegistrations, updatecourseRegistrations, deletecourseRegistrations } from "./Course.controller"
import { zValidator } from "@hono/zod-validator";
import { courseRegistrationsSchema} from "./validator"; 
import { sendEmail } from "../mailer"; // Import the mail function
export const courseRegistrationRouter = new Hono();
//get all courseRegistrations
courseRegistrationRouter.get("/courseRegistrations", listcourseRegistrations) 

//get a single therapist   api/therapist/1
courseRegistrationRouter.get("/courseRegistrations/:id", getcourseRegistrations)

// create a therapist 
courseRegistrationRouter.post(
    "/courseRegistrations",
    async (c) => {
      try {
        const data = await c.req.json();
        console.log("Received Data:", data);
  
        // Send confirmation email
        await sendEmail(
          data.email,
          "Course Registration Confirmation",
          `Hello ${data.fname},\n\nYou have successfully registered for the ${data.courseSelected} course.`,
          `<p>Hello <b>${data.fname}</b>,</p><p>You have successfully registered for the <b>${data.courseSelected}</b> course.</p>`
        );
  
        return c.json({ message: "Registration successful. Confirmation email sent!" });
      } catch (error) {
        console.error("Email Sending Error:", error); // 🔴 Log the exact error
        const errorMessage = (error as Error).message;
        return c.json({ error: "Registration failed. Could not send email.", details: errorMessage }, 500);
      }
    }
  );
  
//update a therapist
courseRegistrationRouter.put("/courseRegistrations/:id", updatecourseRegistrations) 

courseRegistrationRouter.delete("/courseRegistrations/:id", deletecourseRegistrations)
//node mailer

// ✅ Test route to send an email
courseRegistrationRouter.get("/test-email", async (c) => {
    try {
      const testRecipient = "christinenyambwari@gmail.com"; // Replace with your email
      await sendEmail(
        testRecipient,
        "Test Email from Hono 🚀",
        "This is a test email sent from Hono backend using Nodemailer.",
        `<p>This is a <b>test email</b> sent from Hono backend using <b>Nodemailer</b>.</p>`
      );
  
      return c.json({ message: "Test email sent successfully!" });
    } catch (error) {
      return c.json({ error: "Failed to send test email" }, 500);
    }
  });