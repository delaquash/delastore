export { };
    import crypto from "crypto";
    import { User } from "../models/userModel";
    import { Request, Response } from "../types/express";
    import { generateSecretkey, sendVerificationEmail } from "../utils/verifyEmail";
    import jwt from "jsonwebtoken";
/**
 * Create new order
 * @route POST /register
 * @access Private
 */

const register = async (req: Request, res: Response) => {
    try {
    const { name,email, password } = req.body
    // check if user is already registered
    const existingUser = await User.findOne({ email });
    if(existingUser) {
        return res.status(400).json({ message: "User already exist! Please sign in."})
    }

    // register new user
    const newUser = new User({ name, email, password});

    // generate and store verificationToken
    newUser.verifiedToken = crypto.randomBytes(20).toString("hex");
    
    // save new user
    await newUser.save();

    // send verification email to new user
    sendVerificationEmail(newUser.email, newUser.verifiedToken);

    res.status(201).json({
        message:
          "Registration successful. Please check your email for verification.",
      });
    } catch (error) {
      console.log("Error during registration:", error); // Debugging statement
      res.status(500).json({ message: "Registration failed" });
    }
}

/**
 * Create new order
 * @route Login /login
 * @access Private
 */
const secretKey = generateSecretkey()

const login = async (req: Request, res: Response) => {
  try {

    const { email, password }= req.body
    const user = await User.findOne({ email });
      // if user that is trying to login does not esit
    if(!user || password !== user?.password){
      return res.status(401).json({message: "Invalid email or password"})
    }

    // generate token
    const token = jwt.sign({ userId: user._id}, secretKey)
    res.status(200).json({token})
  } catch (error) {
    res.status(500).json({ message: "Login failed"})
  }
}

export { register, login };

