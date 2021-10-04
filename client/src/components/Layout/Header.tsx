import { Fragment } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/user/user-actions";
import { RootState } from "../../store";

export default function ButtonAppBar() {
  const { isLoggedIn } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">Achievers</NavLink>
          </Typography>
          {isLoggedIn ? (
            <Fragment>
              <Button color="inherit" onClick={() => dispatch(logout(history))}>
                <Button color="inherit">
                  <NavLink to="/profile">profile</NavLink>
                </Button>
                <Button color="inherit">
                  <NavLink to="/enrolled">Enrolled courses</NavLink>
                </Button>
                <NavLink to="/logout">logout</NavLink>
              </Button>
            </Fragment>
          ) : (
            <Button color="inherit">
              <NavLink to="/login">login</NavLink>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
