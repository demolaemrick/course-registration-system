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

  const pathname = history.location.pathname;

  const pathIsLogin = pathname === "/login";

  const path = pathIsLogin ? "register" : "login";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ flexGrow: 1 }}
          >
            <Box sx={{ width: 50, height: 50 }}>
              <Logo />
            </Box>
          </Typography>
          {isLoggedIn ? (
            <Fragment>
              <Button component={NavLink} to="/profile" color="inherit">
                profile
              </Button>

              <Button
                component={NavLink}
                to="/courses/enroll-history"
                color="inherit"
              >
                Enrolled courses
              </Button>
              <Button
                component={NavLink}
                to="/logout"
                color="inherit"
                onClick={() => dispatch(logout(history))}
              >
                logout
              </Button>
            </Fragment>
          ) : (
            <Button component={NavLink} to={`/${path}`} color="inherit">
              {path}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
