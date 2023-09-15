import express from "express";
import { register } from "../controllers/User";

const router = express.Router()

router.post("/", register)

export default router;