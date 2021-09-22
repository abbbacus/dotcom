import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import ERoutes from "../../routes";
import DashboardPage from "../../page/DashboardPage";
import RankersPage from "../../page/RankersPage";

function Navigator() {
  return (
    <Switch>
      <Route exact path={ERoutes.dashboard}>
        <DashboardPage />
      </Route>
      <Route path={ERoutes.rankers}>
        <RankersPage />
      </Route>
    </Switch>
  );
}

export default Navigator;
