import { createTransport } from 'nodemailer';

export async function handler(event) {
  if (event.httpMethod === 'POST') {
    console.log(event.body);
    const { name, email, phone, message } = JSON.parse(event.body);

    // Configure the SMTP transporter
    const transporter = createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or an app password
      },
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: 'contact@rescuerx.in', // Your email address
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nContact No:${phone}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      console.log("email sent");
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
      };
    } catch (error) {
      console.log("email not sent", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to send email' }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
}

