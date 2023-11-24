import express from "express";
import { orders } from "../controllers/Order";

const router = express.Router();

router.post("/order", orders);
export default router;
