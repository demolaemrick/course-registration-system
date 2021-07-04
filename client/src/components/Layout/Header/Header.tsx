import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>
        <NavLink to="/">Achievers</NavLink>
      </h1>
      <div className={classes["header-items"]}>        
        <NavLink to="/login">login</NavLink>
        <NavLink to="/profile">profile</NavLink>
      </div>
    </header>
  );
};

export default Header;
