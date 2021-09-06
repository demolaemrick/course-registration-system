import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../../entity/User";
import generateToken from "../utils/generateToken";

export const createUser = async (req: Request, res: Response) => {
  let { firstName, lastName, email, matricNo, password } = req.body;

  try {
    password = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      matricNo,
      password,
    });
    await user.save();

    return res.json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const login = async (req: Request, res: Response) => {
  const { matricNo, password } = req.body;

  try {
    const user = await User.findOne({ matricNo });

    if (!user)
      return res
        .status(404)
        .json({ message: "Student with this ID does not exist" });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(403).json({ message: "Invalid credentials" });

    const accessToken = generateToken(user);
    const response = res
      .cookie("accessToken", accessToken, {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
        maxAge: 1 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: "Logged in successfully 😊 👌", accessToken, user });

    return response;
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const logout = (req: Request, res: Response) => {
  return res
    .clearCookie("accessToken")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
};

export const getUserProfile = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const user = await User.findOne({ uuid: userId });
    return res.json({ user });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const imageUri = req.file.path;

  const { phone, department, college, level, programme, gender } = req.body;
  try {
    const userExists = await User.findOne({ uuid: req.userId });
    if (!userExists)
      return res.status(404).json({ RegisterValidationError: "Wrong user id" });

    await User.update(
      { uuid: req.userId },
      {
        phone,
        department,
        college,
        level,
        programme,
        gender,
        profile_picture: imageUri,
      }
    );

    const updatedUser = await User.findOne({ uuid: req.userId });

    return res.json(updatedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
