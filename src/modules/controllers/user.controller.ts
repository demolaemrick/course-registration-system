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
        .json({ errorMessage: "Student with this ID does not exist" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(403).json({ errorMessage: "Incorrect password" });

    const accessToken = generateToken(user);
    const response = res
      .cookie("accessToken", accessToken, {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
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
}

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { phone, department, college, level, programme, gender } = req.body;
  try {
    const user = await User.findOne({ uuid: userId });
    if (!user) return res.status(404).json({ errorMessage: "Wrong user id" });

    const updatedUser = await User.update(
      { uuid: userId },
      { phone, department, college, level, programme, gender }
    );

    return res.json(updatedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
