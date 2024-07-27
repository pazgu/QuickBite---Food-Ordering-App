import express from "express";
import { userController } from "../controllers/userController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

const { createCurrentUser, updateCurrentUser } = userController;

router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, updateCurrentUser);

export default router;
