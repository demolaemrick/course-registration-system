import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/user/user-actions";
import { RootState } from "../../../store";

import classes from "./Header.module.css";

const Header = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <header className={classes.header}>
      <h1>
        <NavLink to="/">Achievers</NavLink>
      </h1>
      <div className={classes["header-items"]}>
        {isLoggedIn ? (
          <NavLink to="/logout" onClick={() => dispatch(logout(history))}>
            logout
          </NavLink>
        ) : (
          <>
            <NavLink to="/login">login</NavLink>
            <NavLink to="/profile">profile</NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
