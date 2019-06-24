import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchResult from "../SearchResult/SearchResult";
import BookContainer from "../BookContainer";
import HomeContainer from "../HomeContainer";
import NavbarContainer from "../NavbarContainer";
import CartContainer from "../CartContainer"
import CheckoutContainer from "../CheckOutContainer"


export default () => (
    <div>
        <NavbarContainer />
        <div id="main" className="container">
            <Switch>
                <Route exact path="/" render={() => <HomeContainer />} />
                <Route exact path="/books/:bookTitle/:id" render={({ match }) => <BookContainer match={match} />} />
                <Route path="/search" render={() => <SearchResult />} />
                <Route path="/cart" render={() => <CartContainer />} />
                <Route path="/checkout" component={CheckoutContainer} />
            </Switch>
        </div>
    </div>
);
