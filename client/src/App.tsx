import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Profile from "./components/pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Enrolled from "./components/pages/Enrolled";

import { checkUser } from "./store/user/user-actions";

import AdminDashboard from "./components/pages/AdminDdashboard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Layout>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/courses/enroll-history" component={Enrolled} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={AdminDashboard} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
