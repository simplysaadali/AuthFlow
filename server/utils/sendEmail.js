import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendOTPEmail = async (email, otp) => {
    await transporter.sendMail({
        from: `"My App" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Email Verification OTP",

        text: `Your verification OTP is ${otp}. It expires in 10 minutes.`,

        html: `
        <div style="font-family: Arial, sans-serif;">
            <h2>Email Verification</h2>

            <p>Thank you for registering.</p>

            <p>Your verification code is:</p>

            <h1 style="letter-spacing: 5px;">
            ${otp}
            </h1>

            <p>This OTP will expire in <strong>10 minutes</strong>.</p>

            <p>If you did not create this account, you can ignore this email.</p>
        </div>
        `,
    });
};

export default sendOTPEmail;