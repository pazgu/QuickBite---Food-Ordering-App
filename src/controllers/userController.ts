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
    console.log("createCurrentUser function", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body;
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    await user.save();
    res.send(user);
  } catch (error) {
    console.log("updateCurrentUser function", error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export const userController = {
  createCurrentUser,
  updateCurrentUser,
};
