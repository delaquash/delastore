import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Order } from "../models/OrderModel";
import { NextFunction, Request, Response } from "../types/express";
import errorHandler from "../utils/errorMessage";
import { generateSecretkey, sendVerificationEmail } from "../utils/verifyEmail";
import { User } from "../models/userModel";

interface cartProps {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

/**
 * Create new order
 * @route POST /orders
 * @access Private
 */

const orders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, cartItems, totalPrice, shippingAddress, paymentMethod } =
      req.body;
    const user = await User.findById(userId);
    if (!user) {
      const message = "User not found. Please sign up...";
      const error = errorHandler(message, 422);
      return next(error);
    }
    //   create an array of products objects form cartItems
    const product = cartItems.map((item: cartProps) => ({
      name: item?.name,
      image: item?.image,
      price: item?.price,
      quantity: item?.quantity,
    }));

    const newOrder = new Order({
      userId,
      cartItems,
      totalPrice,
      shippingAddress,
      paymentMethod,
    });
    await newOrder.save();
    res
      .status(200)
      .json({ msg: "Order have been created and saved successfully.." });
  } catch (error: any) {
    if (!error.status) error.status = 500;
    next(error);
    console.log(error);
  }
};

export { orders };
