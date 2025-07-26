import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://mailgen.js/",
    },
  });

  const emailHTML = mailGenerator.generate(options.mailgenContent);
  const emailText = mailGenerator.generatePlaintext(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

  const mail = async () => {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
      to: options.email,
      subject: options.subject,
      text: options.emailText,
      html: options.emailHTML,
    });
  };

  try {
    await transporter.sendMail(mail)
  } catch (error) {
    console.error("Email failed")
  }
};

const emailVerificationMailGenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to App! We're very excited to have you on board.",
      action: {
        instructions: "To get started with our app, please click here:",
        button: {
          color: "#22BC66",
          text: "Reset Password",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have question? just reply to this email, we'd love to help",
    },
  };
};

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got req to reset your password",
      action: {
        instructions: "to change the password click the button:",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have question? just reply to this email, we'd love to help",
    },
  };
};

