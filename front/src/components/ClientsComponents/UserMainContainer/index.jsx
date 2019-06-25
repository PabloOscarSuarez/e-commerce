import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchResult from "../SearchResult";
import BookContainer from "../BookContainer";
import HomeContainer from "../HomeContainer";
import NavbarContainer from "../NavbarContainer";
import CartContainer from "../CartContainer"
import BooksOfGenreContainer from "../BooksOfGenreContainer"
import CheckoutContainer from "../CheckOutContainer"
import ConfirmCheckoutContainer from "../ConfirmCheckoutContainer"
import LoginContainer from "../LoginContainer"
import RegisterContainer from "../RegisterContainer"

export default () => (
    <div>
        <NavbarContainer />
        <div id="main" className="container">
            <Switch>
                <Route exact path="/" render={() => <HomeContainer />} />
                <Route exact path="/books/:bookTitle/:id" render={({ match }) => <BookContainer match={match} />} />
                <Route path="/search/:searched" component={SearchResult} />
                <Route path="/genres/:id/:genre" component={BooksOfGenreContainer} />
                <Route path="/cart" render={() => <CartContainer />} />
                <Route path="/checkout" component={CheckoutContainer} />
                <Route path="/confirm-checkout" component={ConfirmCheckoutContainer} />
                <Route path="/register" component={RegisterContainer} />
                <Route path="/login" component={LoginContainer}/>
            </Switch>
        </div>
    </div>
);
