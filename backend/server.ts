import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import crypto from "crypto";
import nodemailer from "nodemailer";
import cors from "cors";
import jwt from "jsonwebtoken";
import connectDB from "./config/db";

// route
import registerRoute from "./routes/userRoutes";


const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.use("/register", registerRoute)


app.listen(PORT, () => {
    console.log(`Server running on mode on port ${PORT}`);
  });