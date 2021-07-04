import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home"
import Auth from "./components/pages/Auth"

function App() {
  return (
    <Router>
      <Switch>
        <Layout>          
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Auth} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
