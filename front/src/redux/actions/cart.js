import axios from "axios";
import {
    ADD_BOOK_TO_CART,
    ADD_NEW_TRANSACTION,
    REMOVE_BOOK_FROM_CART,
    INCREMENT_BOOKS_FROM_CART,
    DECREMENT_BOOKS_FROM_CART,
    ADD_USER_LOCAL_CART,
    NEW_CART,
    REMOVE_CART
} from "../../constants";
import { func } from "prop-types";

export const addBookToCart = function(bookToCart) {
    // console.log("soy bookToCart del action", bookToCart);
    return {
        type: ADD_BOOK_TO_CART,
        bookToCart
    };
};

export const newCart = function(books) {
    // console.log("soy bookToCart del action", bookToCart);
    return {
        type: NEW_CART,
        books
    };
};

export const addNewTransaction = function(newTransaction) {
    return {
        type: ADD_NEW_TRANSACTION,
        newTransaction
    };
};

export const removeCart = function() {
    return {
        type: REMOVE_CART,
    };
};

export const removeBookFromCart = function(updatedBooksToCart, user) {
    return {
        type: REMOVE_BOOK_FROM_CART,
        updatedBooksToCart,
        user
    };
};
export const incrementBooksFromCart = function(updatedBooksToCart, user) {
    return {
        type: INCREMENT_BOOKS_FROM_CART,
        updatedBooksToCart,
        user,
    };
};
export const decrementBooksFromCart = function(updatedBooksToCart, user) {
    return {
        type: DECREMENT_BOOKS_FROM_CART,
        updatedBooksToCart,
        user
    };
};
export const addUserLocalCart = function() {
    return {
        type: ADD_USER_LOCAL_CART
    };
};

export const newBookToCart = bookToCart => dispatch =>
    dispatch(addBookToCart(bookToCart));

export const deleteBookFromCart = (updatedBooksToCart, user) => dispatch =>
    dispatch(removeBookFromCart(updatedBooksToCart, user));

export const incrementBooksToCart = (updatedBooksToCart, user) => dispatch =>
    dispatch(incrementBooksFromCart(updatedBooksToCart, user))

export const decrementBooksToCart = (updatedBooksToCart, user) => dispatch =>
    dispatch(decrementBooksFromCart(updatedBooksToCart, user));

export const userLocalCart = () => dispatch => dispatch(addUserLocalCart());

export const createNewTransaction = (userData, bookToCart) => dispatch => {
    // console.log("soy la data de user",userData, "y de book", bookToCart )
    return axios
        .post(`http://localhost:8000/cart/notLogged/createTransaction`, { userData, bookToCart })
        .then(res => res.data)
        .then((transaction) => {
            dispatch(addNewTransaction(transaction))
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
    console.log("soy la data de user", userData, "y de book", bookToCart)
    return axios
        .post(`http://localhost:8000/cart/logged/createNewCart`, {
            userData,
            bookToCart
        })
        .then(res => {
            console.log(res.data, 'estoy en el action')
            return res.data
        })
};

export const removeAllCart = () => dispatch => {
    // console.log("soy la data de user",userData, "y de book", bookToCart )
    return dispatch(removeCart())

};

export const fetchCart = (userData) => dispatch => {
    // console.log("soy la data de user",userData, "y de book", bookToCart )
    return axios
        .get(`http://localhost:8000/cart/user/${userData.id}`)
        .then(res => res.data)
        .then(booksToCart => {
            console.log('SOY EL FETCH CART QUE VIENE DESDE LA BASE(ACTION)!!!!!!!!!!!!!!!!', booksToCart)
            dispatch(newCart(booksToCart));
        })
};

export const sendEmailConfirm = (userData, transaction) => dispatch => {
    console.log("so user daa del axios", { userData, transaction });
    return axios
        .post("/cart/emailConfirm", { userData, transaction })
        .then(emailConfirm => emailConfirm);
};