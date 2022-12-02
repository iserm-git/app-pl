import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import NotFound from "../pages/NotFound";
import Layout from "../containers/Layout";

import "../styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
