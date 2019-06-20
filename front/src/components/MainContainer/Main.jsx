import React from "react";
import { Route, Switch } from "react-router-dom";
import Book from "../ClientsComponents/BookContainer/Book";
import BookComponent from "../ClientsComponents/BookContainer/Book";
import PanelConainer from "../AdminsComponents/PanelContainer";
// import { fetchLoggedUser } from '../redux/actions/user';
// import NavbarContainer from '../containers/NavbarContainer';

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/Books" component={BookComponent} />
        <Route path="/admin" component={PanelConainer} />
      </Switch>
    </div>
  );
};
