import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DadosPessoais from "./pages/DadosPessoais";
import Experiencias from "./pages/Experiencias";
import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={DadosPessoais} />
        <Route path="/experiencias" component={Experiencias} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
