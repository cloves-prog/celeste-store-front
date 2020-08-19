import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
// import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Catalog from "./components/Catalog";
import Sales from "./components/Sales";
import Clients from "./components/Clients";
import SalesPeople from "./components/SalesPeople";

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/Sales" component={Sales} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/salespeople" component={SalesPeople} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
