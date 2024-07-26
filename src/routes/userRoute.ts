import express from "express";
import { userController } from "../controllers/userController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

const { createCurrentUser } = userController;

router.post("/", jwtCheck, createCurrentUser);

export default router;
