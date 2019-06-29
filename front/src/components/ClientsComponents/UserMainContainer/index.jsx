import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import ProfileContainer from "../ProfileContainer"
import EditProfileContainer from "../EditProfileContainer"
import ComprasContainer from "../ComprasContainer"
import CompraDescriptionContainer from "../CompraDescriptionContainer"


export default ({ user }) => (
    <div>
        <NavbarContainer />
        <div id="main" className="container">
            {
                user ?
                    <Switch>
                        <Route exact path="/" render={() => <HomeContainer />} />
                        <Route exact path="/books/:bookTitle/:id" render={({ match }) => <BookContainer match={match} />} />
                        <Route path="/search/:searched" component={SearchResult} />
                        <Route path="/genres/:id/:genre" component={BooksOfGenreContainer} />
                        <Route path="/cart" render={() => <CartContainer />} />
                        <Route path="/checkout" component={CheckoutContainer} />
                        <Route path="/confirm-checkout" component={ConfirmCheckoutContainer} />
                        <Route path="/register" component={RegisterContainer} />
                        <Route path="/profile" component={ProfileContainer} />
                        <Route path="/edit-profile" component={EditProfileContainer} />
                        <Route exact path="/compras" component={ComprasContainer} />
                        <Route path="/compras/:id" component={CompraDescriptionContainer} />
                        <Route path="/login" component={LoginContainer} />
                        <Redirect from="/" to="/" />
                    </Switch>
                    :
                    <Switch>
                        <Route exact path="/" render={() => <HomeContainer />} />
                        <Route exact path="/books/:bookTitle/:id" render={({ match }) => <BookContainer match={match} />} />
                        <Route path="/search/:searched" component={SearchResult} />
                        <Route path="/genres/:id/:genre" component={BooksOfGenreContainer} />
                        <Route path="/cart" render={() => <CartContainer />} />
                        <Route path="/checkout" component={CheckoutContainer} />
                        <Route path="/confirm-checkout" component={ConfirmCheckoutContainer} />
                        <Route path="/register" component={RegisterContainer} />
                        <Route path="/login" component={LoginContainer} />
                        <Redirect from="/" to="/" />

                    </Switch>
            }
        </div>
    </div>
);
