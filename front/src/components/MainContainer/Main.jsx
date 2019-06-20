import React from "react";
import { Route, Switch } from "react-router-dom";
import PanelConainer from "../AdminsComponents/PanelContainer";
import UserMainContainer from '../ClientsComponents/UserMainContainer'


export default () => {
  return (
    <div>
      <Switch>
        <Route path="/admin" component={PanelConainer} />
        <Route path="/" component={UserMainContainer} />
      </Switch>
    </div>
  );
};
