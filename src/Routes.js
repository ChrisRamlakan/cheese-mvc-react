import React from "react";
import { Switch, Route } from "react-router-dom";
//TODO - Add imports for Home/Cheeses/Menus/Categories

import CategoriesView from "./views/CategoriesView";
import CheesesView from "./views/CheesesView";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={CategoriesView} />
    <Route path="/cheeses" component={CheesesView} />
    <Route path="/categories" component={CategoriesView} />
    <Route path="/menus" component={CategoriesView} />
  </Switch>
);

export default Routes;
