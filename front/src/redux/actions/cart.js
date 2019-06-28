import axios from "axios";
import {
    ADD_BOOK_TO_CART,
    ADD_NEW_TRANSACTION,
    REMOVE_BOOK_FROM_CART,
    INCREMENT_BOOKS_FROM_CART,
    DECREMENT_BOOKS_FROM_CART,
    ADD_USER_LOCAL_CART
} from "../../constants";
import { func } from "prop-types";

export const addBookToCart = function(bookToCart) {
    // console.log("soy bookToCart del action", bookToCart);
    return {
        type: ADD_BOOK_TO_CART,
        bookToCart
    };
};

export const addNewTransaction = function(newTransaction) {
    console.log("enre 2")
    return {
        type: ADD_NEW_TRANSACTION,
        newTransaction
    };
};

export const removeBookFromCart = function(updatedBooksToCart) {
    return {
        type: REMOVE_BOOK_FROM_CART,
        updatedBooksToCart
    };
};
export const incrementBooksFromCart = function(updatedBooksToCart) {
    return {
        type: INCREMENT_BOOKS_FROM_CART,
        updatedBooksToCart
    };
};
export const decrementBooksFromCart = function(updatedBooksToCart) {
    return {
        type: DECREMENT_BOOKS_FROM_CART,
        updatedBooksToCart
    };
};
export const addUserLocalCart = function() {
    return {
        type: ADD_USER_LOCAL_CART
    };
};

export const newBookToCart = bookToCart => dispatch =>
    dispatch(addBookToCart(bookToCart));

export const deleteBookFromCart = updatedBooksToCart => dispatch =>
    dispatch(removeBookFromCart(updatedBooksToCart));

export const incrementBooksToCart = updatedBooksToCart => dispatch =>
    dispatch(incrementBooksFromCart(updatedBooksToCart));

export const decrementBooksToCart = updatedBooksToCart => dispatch =>
    dispatch(decrementBooksFromCart(updatedBooksToCart));

export const userLocalCart = () => dispatch => dispatch(addUserLocalCart());

export const createNewTransaction = (userData, bookToCart) => dispatch => {
    // console.log("soy la data de user",userData, "y de book", bookToCart )
   return axios.post(`http://localhost:8000/cart/notLogged/createTransaction`, { userData, bookToCart })
        .then(res => res.data)
        .then((transaction) => {
            dispatch(addNewTransaction(transaction))
            return transaction
        })

};

export const createNewTransactionToLoggedUser = (userData, bookToCart) => dispatch => {
    // console.log("soy la data de user",userData, "y de book", bookToCart )
    return axios
        .post(`http://localhost:8000/cart/logged/createTransaction`, { userData, bookToCart })
        .then(res => res.data)
        .then((transaction) => {
            dispatch(addNewTransaction(transaction))
        })

};
export const createNewCart = (userData, bookToCart) => dispatch => {
    // console.log("soy la data de user",userData, "y de book", bookToCart )
    return axios
        .post(`http://localhost:8000/cart/logged/createNewCart`, {
            userData,
            bookToCart
        })
        .then(res => res.data)
        .then(bookToCart => dispatch(addBookToCart(bookToCart)));
};

export const sendEmailConfirm = (userData, Transaction) => dispatch => {
    console.log("so Transaction", Transaction );
    
    return axios.post("/cart/emailConfirm", {userData:userData, Transaction:Transaction})
        .then(emailConfirm => emailConfirm);
};