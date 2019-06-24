import { ADD_BOOK_TO_CART, ADD_NEW_TRANSACTION, REMOVE_BOOK_FROM_CART, } from "../../constants";

const initialState = {
  booksToCart: [],
  newTransaction: {}
};

export default (state = initialState, action) => {
 
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      return {
        ...state, booksToCart: action.bookToCart
      };
    case REMOVE_BOOK_FROM_CART:
      return{
        ...state, booksToCart: action.updatedBooksToCart
      }
    case ADD_NEW_TRANSACTION:
      return { ...state, newTransaction: action.newTransaction };

    default:
      return state;
  }
};
