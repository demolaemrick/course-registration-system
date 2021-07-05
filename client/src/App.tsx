import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
