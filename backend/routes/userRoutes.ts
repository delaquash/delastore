import express from "express";
import { address, login, register, userAdress } from "../controllers/User";


const router = express.Router()


router.post("/register", register);
router.post('/login', login);
router.post("/address", address);
router.get ("/address/:userId", userAdress);

export default router;
