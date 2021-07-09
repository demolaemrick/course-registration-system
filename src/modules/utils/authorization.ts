import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET) as any
    console.log(data);
    req.userId = data.id;
    return next();
  } catch {
    return res.status(403).json({message: 'Invalid token'});
  }
};

export default authorization
