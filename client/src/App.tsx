import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Profile from "./components/pages/Profile";
import PrivateRoute from "./components/PrivateRoute";  


import { getUserProfile } from "./store/user/user-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Layout>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;




