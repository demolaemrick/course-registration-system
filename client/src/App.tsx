import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Layout>          
          <Route exact path='/' component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
