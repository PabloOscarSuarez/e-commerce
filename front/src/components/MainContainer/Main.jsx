import React from "react";
import { Route, Switch } from "react-router-dom";
import Book from "../ClientsComponents/BookContainer/Book";
import BookComponent from "../ClientsComponents/BookContainer/Book";
import Register from "../ClientsComponents/RegisterContainer/index";
import Login from "../ClientsComponents/LoginContainer/index";
// import { fetchLoggedUser } from '../redux/actions/user';
// import NavbarContainer from '../containers/NavbarContainer';

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/Books" component={BookComponent} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
      </Switch>
    </div>
  );
};
