import {
  ADD_BOOK_TO_CART,
  ADD_NEW_TRANSACTION,
  REMOVE_BOOK_FROM_CART,
  INCREMENT_BOOKS_FROM_CART,
  DECREMENT_BOOKS_FROM_CART,
  ADD_USER_LOCAL_CART
} from "../../constants";

const initialState = {
  booksToCart: []
  // newTransaction: {}
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
     
        return {
          ...state,
          booksToCart: [bookObj]
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
                price:
                  state.booksToCart[i].book.price *
                  (state.booksToCart[i].cant + 1)
              };
              var newBooksToCart = state.booksToCart;
              newBooksToCart[i] = bookObjOk;
              exist = true;

              return {
                ...state,
                booksToCart: newBooksToCart
              };
            } else {
              var bookObjOk = {
                book: action.bookToCart,
                cant: action.bookToCart.stock,
                price:
                  state.booksToCart[i].book.price * state.booksToCart[i].cant
              };
              var newBooksToCart = state.booksToCart;
              newBooksToCart[i] = bookObjOk;
              exist = true;

              return {
                ...state,
                booksToCart: newBooksToCart
              };
            }
          }
        }
        if (exist == false) {
          return {
            ...state,
            booksToCart: [...state.booksToCart, bookObj2]
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
      // console.log("soy action del remove",action.updatedBooksToCart.book.id)
      return {
        ...state,
        booksToCart: [...bookList]
      };

    case INCREMENT_BOOKS_FROM_CART:
      var bookList = state.booksToCart;
      // console.log('INCREMENT', bookList)

      for (let i = 0; i < bookList.length; i++) {
        if (bookList[i].book.id == action.updatedBooksToCart.book.id) {
          if (action.updatedBooksToCart.cant >= 1) {
            if (
              action.updatedBooksToCart.cant <
              action.updatedBooksToCart.book.stock
            ) {
              bookList[i].cant = bookList[i].cant + 1;
              bookList[i].price =
                bookList[i].price + action.updatedBooksToCart.book.price;
            }
          }
        }
      }
      var result = {
        ...state,
        booksToCart: [...bookList]
      };
      return result;

    case ADD_NEW_TRANSACTION:
      return { ...state, booksToCart: [...action.newTransaction] };

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
      return {
        ...state,
        booksToCart: [...bookList]
      };

    case ADD_USER_LOCAL_CART:
      var localCart = JSON.parse(localStorage.getItem("cart"));
   
      return { ...state, booksToCart: localCart };

    default:
      return state;
  }
};
