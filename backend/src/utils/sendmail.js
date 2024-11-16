// server.j
import nodemailer from "nodemailer";

// Nodemailer transport setup
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other email services like 'hotmail', 'outlook', etc.
  auth: {
    user: "youremail@example.com", // Your email address
    pass: "your-email-password", // Your email password or App password if 2FA enabled
  },
});

// Define the contact route to handle POST requests

export { sendMail };
