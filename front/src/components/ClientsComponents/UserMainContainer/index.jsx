import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchResult from "../SearchResult";
import BookContainer from "../BookContainer";
import HomeContainer from "../HomeContainer";
import NavbarContainer from "../NavbarContainer";
import CartContainer from "../CartContainer"


export default () => (
    <div>
        <NavbarContainer />
        <div id="main" className="container">
            <Switch>
                <Route exact path="/" render={() => <HomeContainer />} />
                <Route exact path="/books/:bookTitle/:id" render={({ match }) => <BookContainer match={match} />} />
                <Route path="/search/:searched" component={SearchResult} />
                <Route path="/cart" render={() => <CartContainer />} />
            </Switch>
        </div>
    </div>
);
