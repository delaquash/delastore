import crypto from "crypto";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import { NextFunction, Request, Response } from "../types/express";
import errorHandler from "../utils/errorMessage";
import { generateSecretkey, sendVerificationEmail } from "../utils/verifyEmail";

/**
 * Create new order
 * @route POST /register
 * @access Private
 */

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    // check if user is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const message = "User exist!!! Please log in...";
      const error = errorHandler(message, 422);
      return next(error);
    }

    // register new user
    const newUser = new User({ name, email, password });

    // generate and store verificationToken
    newUser.verifiedToken = crypto.randomBytes(20).toString("hex");
    const verifiedEmail = newUser.email;
    const verifiedToken = newUser.verifiedToken;
    // send verification email to new user
    sendVerificationEmail(verifiedEmail, verifiedToken);

    // save new user
    const result = await newUser.save();

    return res
      .status(201)
      .json({
        message:
          "Registration successful. Please check your email for verification.",
        user: result,
      });
  } catch (error: any) {
    if (!error.status) {
      error.status = 500;
    }
    next(error);
    console.log(error);
  }
};

/**
 * Create new order
 * @route Login /login
 * @access Private
 */
const secretKey = generateSecretkey();

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // if user that is trying to login does not esit
    if (!user || password !== user?.password) {
      const message = "User not found. Please sign up...";
      const error = errorHandler(message, 422);
      return next(error);
    }
    // generate token
    const token = jwt.sign({ userId: user._id }, secretKey);
    return res.status(200).json({ token });
  } catch (error: any) {
    if (!error.status) error.status = 500;
    next(error);
    console.log(error);
  }
};


const address = async (req: Request, res: Response, next: NextFunction) => {

}

export { login, register };
