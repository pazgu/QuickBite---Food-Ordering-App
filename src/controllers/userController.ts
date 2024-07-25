import { Request, Response } from "express";
import User from "../models/User";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const exisitingUser = await User.findOne({ auth0Id });
    if (exisitingUser) {
      return res.status(200).send();
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser.toObject());
    //remove Mongoose-specific properties and methods, leaving with a plain Js object
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export const userController = {
  createCurrentUser,
};
