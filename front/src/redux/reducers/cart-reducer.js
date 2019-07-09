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

const initialState = {
    booksToCart: [],
    newTransaction: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_CART:
            if (state.booksToCart.length == 0) {
                var bookObj = {
                    book: action.bookToCart,
                    cant: 1,
                    price: action.bookToCart.price
                };

                localStorage.setItem("cart", JSON.stringify([bookObj]))
                var localCart = JSON.parse(localStorage.getItem("cart"))

                return {
                    ...state,
                    booksToCart: localCart
                };
            } else if (state.booksToCart.length > 0) {
                var bookObj2 = {
                    book: action.bookToCart,
                    cant: 1,
                    price: action.bookToCart.price
                };
                var exist = false;

                for (let i = 0; i < state.booksToCart.length; i++) {
                    if (state.booksToCart[i].book.id == action.bookToCart.id) {
                        if (state.booksToCart[i].cant < action.bookToCart.stock) {
                            var bookObjOk = {
                                book: action.bookToCart,
                                cant: state.booksToCart[i].cant + 1,
                                price: state.booksToCart[i].book.price *
                                    (state.booksToCart[i].cant + 1)
                            };
                            var newBooksToCart = state.booksToCart;
                            newBooksToCart[i] = bookObjOk;
                            exist = true;

                            localStorage.setItem("cart", JSON.stringify(newBooksToCart))
                            var localCart = JSON.parse(localStorage.getItem("cart"))

                            return {
                                ...state,
                                booksToCart: newBooksToCart
                            };
                        } else {
                            var bookObjOk = {
                                book: action.bookToCart,
                                cant: action.bookToCart.stock,
                                price: state.booksToCart[i].book.price * state.booksToCart[i].cant
                            };
                            var newBooksToCart = state.booksToCart;
                            newBooksToCart[i] = bookObjOk;
                            exist = true;

                            localStorage.setItem("cart", JSON.stringify(newBooksToCart))
                            var localCart = JSON.parse(localStorage.getItem("cart"))

                            return {
                                ...state,
                                booksToCart: localCart
                            };
                        }
                    }
                }
                if (exist == false) {
                    localStorage.setItem("cart", JSON.stringify([...state.booksToCart, bookObj2]))
                    var localCart = JSON.parse(localStorage.getItem("cart"))

                    return {
                        ...state,
                        booksToCart: [...localCart]
                    };
                }
            }

        case REMOVE_BOOK_FROM_CART:
            var bookList = state.booksToCart;

            for (let i = 0; i < bookList.length; i++) {
                if (bookList[i].book.id == action.updatedBooksToCart.book.id) {
                    bookList.splice(bookList[i], 1);
                }
                // console.log("soy i",bookList[i])
            }
            localStorage.setItem("cart", JSON.stringify(bookList))
            var localCart = JSON.parse(localStorage.getItem("cart"))

            return {
                ...state,
                booksToCart: localCart
            };

        case INCREMENT_BOOKS_FROM_CART:

            var bookList = state.booksToCart;
            for (let i = 0; i < bookList.length; i++) {
                if (bookList[i].book.id == action.updatedBooksToCart.book.id) {
                    if (action.updatedBooksToCart.cant <
                        action.updatedBooksToCart.book.stock) {
                        bookList[i].cant = bookList[i].cant + 1;
                        bookList[i].price = bookList[i].price + action.updatedBooksToCart.book.price;
                    };
                }
            }
            localStorage.setItem("cart", JSON.stringify(bookList))
            var localCart = JSON.parse(localStorage.getItem("cart"))
            return {
                ...state,
                booksToCart: [...localCart]
            };

            // }

        case ADD_NEW_TRANSACTION:
            var saeok = Object.assign({}, state, { newTransaction: action.newTransaction })

            return saeok;

        case DECREMENT_BOOKS_FROM_CART:
            var bookList = state.booksToCart;
            for (let i = 0; i < bookList.length; i++) {
                if (bookList[i].book.id == action.updatedBooksToCart.book.id) {
                    if (action.updatedBooksToCart.cant > 1) {
                        bookList[i].cant = bookList[i].cant - 1;
                        bookList[i].price = bookList[i].price - action.updatedBooksToCart.book.price;
                    } else bookList.splice(bookList[i], 1);
                }
            }

            localStorage.setItem("cart", JSON.stringify(bookList))
            var localCart = JSON.parse(localStorage.getItem("cart"))
            return {
                ...state,
                booksToCart: localCart
            };

        case ADD_USER_LOCAL_CART:
            var localCart = JSON.parse(localStorage.getItem("cart"));

            if (localCart == null) {
                return {...state, booksToCart: [] };
            }

            // console.log(localCart, 'SOY LOCAL CART')
            return {...state, booksToCart: [...localCart] };

        case NEW_CART:

            // localStorage.setItem("cart", JSON.stringify(action.books))
            // action.books ACA TENGO LOS LIBROS DE LA BASE

            if (action.books.length > 0) {
                localStorage.setItem("cart", JSON.stringify(action.books))
                var localCart = JSON.parse(localStorage.getItem("cart"))
                return {
                    ...state,
                    booksToCart: [...localCart]
                };
            }

            // return {...state, booksToCart: localCart };

        case REMOVE_CART:
            // console.log('SOY LOCAL CART!!!!!!!!!!!', localCart)
            localStorage.setItem("cart", JSON.stringify([]))
            var localCart = JSON.parse(localStorage.getItem("cart"))
            return {...state, booksToCart: localCart };

        default:
            return state;
    }
};