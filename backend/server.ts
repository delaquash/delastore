export { };
  import bodyParser from "body-parser";
  import express, { Request, Response } from "express";
// import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./config/db";
dotenv.config();

// route
import registerRoute from "./routes/userRoutes";
connectDB();
const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.use("/", registerRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on mode on port ${PORT}`);
  });