import { User } from "../models/userModel"
import { Request, Response } from "../types/express"
import crypto from "crypto";
import  { sendVerificationEmail } from "../utils/verifyEmail";

/**
 * Create new order
 * @route POST /api/user
 * @access Private
 */

const register = async (req: Request, res: Response) => {
    const { name,email, password } = req.body
    // check if user is already registered
    const existingUser = await User.findById({ email });
    if(existingUser) {
        return res.status(400).json({ message: "User already exist! Please sign in."})
    }

    // register new user
    const newUser = new User({ name, email, password})

    // generate and store verificationToken
    newUser.verifiedToken = crypto.randomBytes(20).toString("hex");
    
    // save new user
    await newUser.save();

    // send verification email to new user
    sendVerificationEmail(newUser.email, newUser.verifiedToken)
}

export { register }