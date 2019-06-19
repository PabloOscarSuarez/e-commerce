import React from "react";
import { Route, Switch } from "react-router-dom";
import BookComponent from "../ClientsComponents/BookContainer/Book";
import HomeComponent from "../ClientsComponents/HomeContainer";
import HomeContainer from "../ClientsComponents/HomeContainer";
// import { fetchLoggedUser } from '../redux/actions/user';
// import NavbarContainer from '../containers/NavbarContainer';

export default () => {
  return (
    <div>
      <Switch>
      <Route exact path= "/" render = {() => <HomeContainer/>} />
      <Route exact path= "/Book/id" render = {()=> <BookComponent/>} />
        
      </Switch>
    </div>
  );
};
