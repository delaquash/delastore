import express from "express";
import { login, register, address } from "../controllers/User";

const router = express.Router()

router.post("/register", register);
router.post('/login', login)
router.post("/address", address)

export default router;