import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import DashboardPage from "../../page/DashboardPage";
import ERoutes from "../../routes";
import PipelinesIndex from "../../page/Pipelines/Index";
import PipelinesShow from "../../page/Pipelines/Show";
import RankersPage from "../../page/RankersPage";

function Navigator() {
  return (
    <Switch>
      <Route exact path={ERoutes.dashboard} component={DashboardPage} />

      <Route exact path={ERoutes.pipelines} component={PipelinesIndex} />
      <Route path={`${ERoutes.pipelines}/:pipelineId`} component={PipelinesShow} />
  
      <Route exact path={ERoutes.rankers} component={RankersPage} />
    </Switch>
  );
}

export default Navigator;
