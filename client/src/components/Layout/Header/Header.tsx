import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { logout } from "../../../store/user/user-actions"


import  classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <header className={classes.header}>
      <h1>
        <NavLink to="/">Achievers</NavLink>
      </h1>
      <div className={classes["header-items"]}>        
        <NavLink to="/login">login</NavLink>
        <NavLink to="/profile">profile</NavLink>
        <NavLink to="/logout" onClick={() => dispatch(logout(history))}>logout</NavLink>
      </div>
    </header>
  );
};

export default Header;
