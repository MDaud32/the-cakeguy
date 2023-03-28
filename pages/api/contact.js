import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Check that the request method is POST
  if (req.method === "POST") {
    // Get the contact form data from the request body
    const { name, email, message, subject } = req.body;

    // Create a transporter object to send the email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      auth: {
        user: "Your Name <yourname@example.com>",
        pass: "xuvgwxmzghgsrshrrh",
      },
      secure: true,
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: "Your Name <yourname@example.com>", // replace with your name and email address
        to: "Your Name <yourname@example.com>", // replace with the recipient's email address
        subject: `${subject}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });
      // Return a success response
      res
        .status(200)
        .json({ message: "message sent successfully", statusCode: 200 });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "message sending failed", statusCode: 500 });
    }
  } else {
    // Return a 405 Method Not Allowed error response for all other request methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
