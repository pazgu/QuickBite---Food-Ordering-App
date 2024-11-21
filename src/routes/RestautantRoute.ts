import express from "express";
import multer from "multer";
import RestaurantController from "../controllers/myRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

const { createMyRestaurant } = RestaurantController;

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.post(
  "/",
  jwtCheck,
  jwtParse,
  upload.single("imageFile"),
  createMyRestaurant
);

export default router;
