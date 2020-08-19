import React from "react";
import {
  Route,
  Switch,
  HashRouter,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Catalog from "./components/Catalog";
import Sales from "./components/Sales";
import Clients from "./components/Clients";
import SalesPeople from "./components/SalesPeople";
import { isAuthenticated } from "./services/users";



const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Catalog} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/products" component={Products} />
      <PrivateRoute exact path="/Sales" component={Sales} />
      <PrivateRoute exact path="/clients" component={Clients} />
      <PrivateRoute exact path="/salespeople" component={SalesPeople} />
    </Switch>
  </HashRouter>
);

export default Routes;
