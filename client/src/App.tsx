import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Profile from "./components/pages/Profile";
// import PrivateRoute from "./components/PrivateRoute";
import { RootState } from "./store";

import { getUserProfile } from "./store/user/user-actions";

function App() {
  const { isLoggedIn } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    console.log("Effect");
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Layout>
          {isLoggedIn && (
            <>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
            </>
          )}
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
