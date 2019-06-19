import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PanelBooksContainer from '../PanelBooksContainer';
import SidebarContainer from '../SidebarContainer';


export default () => (
  <div id="main" className="container-fluid">
    <SidebarContainer />
    <div className="col-xs-10">
      <Switch>
        <Route exact path="/books" component={PanelBooksContainer} />
      </Switch>
    </div>
  </div>
);
