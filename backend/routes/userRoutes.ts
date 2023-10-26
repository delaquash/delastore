import express from "express";
import { login, register, address, userAdress } from "../controllers/User";

const router = express.Router()

router.post("/register", register);
router.post('/login', login);
router.post("/address", address);
router.get ("/address/:userId", userAdress);

export default router;
