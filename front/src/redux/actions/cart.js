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

export const addBookToCart = function (bookToCart) {
    // console.log("soy bookToCart del action", bookToCart);
    return {
        type: ADD_BOOK_TO_CART,
        bookToCart
    };
};

export const newCart = function (books) {
    // console.log("soy bookToCart del action", bookToCart);
    return {
        type: NEW_CART,
        books
    };
};

export const addNewTransaction = function (newTransaction) {
    console.log("enre 2")
    return {
        type: ADD_NEW_TRANSACTION,
        newTransaction
    };
};

export const removeCart = function () {
    return {
        type: REMOVE_CART,
    };
};

export const removeBookFromCart = function (updatedBooksToCart, user) {
    return {
        type: REMOVE_BOOK_FROM_CART,
        updatedBooksToCart,
        user
    };
};
export const incrementBooksFromCart = function (updatedBooksToCart, user) {
    return {
        type: INCREMENT_BOOKS_FROM_CART,
        updatedBooksToCart,
        user,
    };
};
export const decrementBooksFromCart = function (updatedBooksToCart, user) {
    return {
        type: DECREMENT_BOOKS_FROM_CART,
        updatedBooksToCart,
        user
    };
};
export const addUserLocalCart = function () {
    return {
        type: ADD_USER_LOCAL_CART
    };
};
// ale
export const newBookToCart = (newBook, user) => dispatch => {

    if (!user) {
        return dispatch(addBookToCart(newBook))
    }
    else {
        // COMO LOGEADO
        return axios.post(`http://localhost:8000/cart/logged/addBookToCart`, { newBook })
            .then(res => res.data)
            .then((transaction) => {
                dispatch(addBookToCart(newBook));
                return transaction
            })
    }

}
// ale
export const incrementBooksToCart = (book, user) => dispatch => {

    if (!user) {
        return dispatch(incrementBooksFromCart(book, user))
    }
    else {
        return axios.post(`http://localhost:8000/cart/logged/addBookToCart`, { newBook: book.book })
            .then(res => res.data)
            .then((transaction) => {
                dispatch(incrementBooksFromCart(book, user))
                return transaction
            })
    }

}
export const decrementBooksToCart = (book, user) => dispatch => {

    if (!user) {
        return dispatch(decrementBooksFromCart(book, user));
    }
    else {
        return axios.post(`http://localhost:8000/cart/logged/removeBookFromCart`, { book: book.book })
            .then(res => res.data)
            .then((transaction) => {
                dispatch(decrementBooksFromCart(book, user))
                return transaction
            })
    }
}

export const deleteBookFromCart = (book, user) => dispatch => {
    dispatch(removeBookFromCart(book, user));

    if(user){
        return axios.post(`http://localhost:8000/cart/logged/removeAllOfBookFromCart`, { book: book.book })
            .then(res => res.data)
            .then((transaction) => {
                // dispatch(removeBookFromCart(book, user));
                return transaction
            })
    }
}

export const userLocalCart = () => dispatch => dispatch(addUserLocalCart());

export const createNewTransaction = (userData, bookToCart) => dispatch => {
    console.log("soy la data de user y de book!!!!!!!!!!!!!!!!!", bookToCart)
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

// export const createNewCart = (userData, newBook) => dispatch => {
//    // COMO LOGEADO

//    console.log('ENTRE AL ACTION', newBook)

//    return axios.post(`http://localhost:8000/cart/logged/addBookToCart`, {newBook})
//    .then(res => res.data)
//    .then((transaction) => {
//        dispatch(addBookToCart(newBook));
//        return transaction
//    })

//    // COMO LOGEADO
// };

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

export const sendEmailConfirm = (userData, Transaction) => dispatch => {
    console.log("so Transaction", Transaction);

    return axios.post("/cart/emailConfirm", { userData: userData, Transaction: Transaction })
        .then(emailConfirm => emailConfirm);
};