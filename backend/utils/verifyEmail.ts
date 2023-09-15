import nodemailer from "nodemailer";
import { Request, Response } from "../types/express";
import { User } from "../models/userModel";

const sendVerificationEmail =async(email: string, verificationToken: string) => {
    // configuring email service
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "olaide1191@gmail.com",
            pass: "phyhtfrhwkppraxs"
        }
    });

    // compose email message
    const mailOptions = {
        from: "delastore",
        to: email,
        subject: "Email Verification",
        text: "Please click the following link to verify your email : http://localhost:8000/verify/${verificationToken"
    }

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log("Error sending verification emal", error)
    }
}

const verifyEmail = async (req: Request, res: Response) => {
    try {
        const token = req.params.token;
        // find the user with the given verification token
        const user = await User.findOne({ verifiedToken: token })
        if(!user){
            return res.status(404).json({ message: "Invalid verification token.."})
        }

        // mark user as verified
        user.verified = true;
        user.verifiedToken = undefined;

        // save user
        await user.save()
        res.status(200).json({ message: "Email verified successfully.."})
    } catch (error) {
        res.status(500).json({ message: "Email verification failed..."})
    }
}

export  { sendVerificationEmail, verifyEmail };