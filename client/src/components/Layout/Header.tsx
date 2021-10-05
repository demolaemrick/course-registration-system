import { Fragment } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

import Logo from "../Logo";

import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/user/user-actions";
import { RootState } from "../../store";

export default function ButtonAppBar() {
  const { isLoggedIn } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const path = history.location.pathname;

  const pathIsLogin = path === "/login";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">
              <Box sx={{ width: 50, height: 50 }}>
                <Logo />
              </Box>
            </NavLink>
          </Typography>
          {isLoggedIn ? (
            <Fragment>
              <Button color="inherit">
                <NavLink to="/profile">profile</NavLink>
              </Button>
              <Button color="inherit">
                <NavLink to="/courses/enroll-history">Enrolled courses</NavLink>
              </Button>
              <Button color="inherit" onClick={() => dispatch(logout(history))}>
                <NavLink to="/logout">logout</NavLink>
              </Button>
            </Fragment>
          ) : (
            <Button color="inherit">
              {pathIsLogin ? (
                <NavLink to="/register">Register</NavLink>
              ) : (
                <NavLink to="/login">login</NavLink>
              )}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
