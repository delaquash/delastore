import nodemailer from "nodemailer";

const sendVerificationEmail =async(email, verification) => {
    // configuring email service
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "olaide1191@gmail.com",
            pass: "phyhtfrhwkppraxs"
        }
    })
}

export default sendVerificationEmail;