import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Check that the request method is POST
  if (req.method === "POST") {
    // Get the contact form data from the request body
    const { name, email, message } = req.body;

    // Create a transporter object to send the email
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com", // replace with your SMTP server host
      port: 587, // replace with your SMTP server port
      secure: false, // true for 465, false for other ports
      auth: {
        user: "username", // replace with your SMTP username
        pass: "password", // replace with your SMTP password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: "Your Name <yourname@example.com>", // replace with your name and email address
        to: "recipient@example.com", // replace with the recipient's email address
        subject: "New contact form submission",
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      // Return a success response
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      // Return an error response
      res
        .status(500)
        .json({ message: "An error occurred while sending the email" });
    }
  } else {
    // Return a 405 Method Not Allowed error response for all other request methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
