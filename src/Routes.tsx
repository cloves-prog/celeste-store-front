import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Sales from "./components/Sales";
import Clients from "./components/Clients";
import SalesPeople from "./components/SalesPeople";

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/salespeople" component={SalesPeople} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
