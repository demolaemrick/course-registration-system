import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../../entity/User";
import generateToken from "../utils/generateToken";

export const createUser = async (req: Request, res: Response) => {
  let { firstName, lastName, email, matric_no, password } = req.body;

  try {
    password = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      matric_no,
      password,
    });
    await user.save();

    return res.json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const login = async (req: Request, res: Response) => {
  const { matric_no, password } = req.body;

  try {
    const user = await User.findOne({ matric_no });

    if (!user)
      return res
        .status(404)
        .json({ errorMessage: "Student with this ID does not exist" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(403).json({ errorMessage: "Incorrect password" });

    const token = generateToken(user);

    return res.json({ token, user });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

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
