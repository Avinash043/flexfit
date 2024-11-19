import User from "@/models/userModel";
import nodemailer from "nodemailer";
import { uuid } from "uuidv4";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //TODO mail config
    const hashedToken = uuid();
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set:{
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
        }
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set:{
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
        }
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "330391c7a11707",
        pass: "565aef76f4309a",
      },
    });

    const mailOptions = {
      from: "rajavinash043@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "verify your email" : "Forgot your password",
      html: `<p>Click <a href="${
            process.env.DOMAIN
            }/verifyemail?token=${hashedToken}">here</a>to ${
            emailType === "VERIFY" ? "verify your email" : "reset your password"
            } or copy amd paste the link below in your browser.
            <br />${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`,
    };

    const mailInfo = await transporter.sendMail(mailOptions);

    return mailInfo;
  } catch (err) {
    console.log("Something went wrong Unexpected " + err);
  }
};
