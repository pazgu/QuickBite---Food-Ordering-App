import express from "express";
import { userController } from "../controllers/userController";

const router = express.Router();

const { createCurrentUser } = userController;

router.post("/", createCurrentUser);

export default router;
