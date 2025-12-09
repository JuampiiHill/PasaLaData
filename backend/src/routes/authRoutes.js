import express from "express";
import { register } from "../controllers/authController.js";

const router = express.Router();

router.use((req, res, next) => {
    console.log("Entro a /api/auth", req.method, req.path);
    next();
})

router.post("/registro", register);

export default router;