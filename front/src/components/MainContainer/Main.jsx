import React from "react";
import { Route, Switch } from "react-router-dom";
import BookContainer from "../ClientsComponents/BookContainer";
import HomeContainer from "../ClientsComponents/HomeContainer";
import NavbarContainer from "../ClientsComponents/NavbarContainer";
import SearchResult from "../ClientsComponents/SearchResult/SearchResult"


export default () => {  
  return (
    <div>
      <NavbarContainer/>
      <Switch>
      <Route exact path= "/" render = {() => <HomeContainer/>} />
      <Route exact path= "/book/:id" render = {({match})=> <BookContainer match = {match}/>} />
      <Route exact path= "/search" render = {()=> <SearchResult/>} />
      </Switch>
    </div>
  );
};
