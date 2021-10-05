import { Avatar } from "@mui/material";
import AchieversLogo from "../assets/Achievers-logo.png";

const Logo = () => {
  return (
    <Avatar
      sx={{ height: "100%", width: "100%" }}
      src={AchieversLogo}
      alt="achievers-logo"
      variant="square"
    />
  );
};

export default Logo;
