import jwt from "jsonwebtoken";
import User from "../../entity/User";

const generateToken = (user: User) => {
  return jwt.sign(
    {
      id: user.uuid,  
    },
    process.env.TOKEN_SECRET,
    { expiresIn: "1h" }
  );
};

export default generateToken;
