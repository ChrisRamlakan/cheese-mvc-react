import React from "react";
import { Switch, Route } from "react-router-dom";
//TODO - Add imports for Home/Cheeses/Menus/Categories

import CategoriesView from "./views/CategoriesView";
import CheesesView from "./views/CheesesView";
import MenuView from "./views/MenuView";
import MenusView from "./views/MenusView";
import HomeView from "./views/HomeView";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeView} />
    <Route path="/cheeses" component={CheesesView} />
    <Route path="/categories" component={CategoriesView} />
    <Route path="/menus/:menuID" component={MenuView} />
    <Route path="/menus" component={MenusView} />
  </Switch>
);

export default Routes;
