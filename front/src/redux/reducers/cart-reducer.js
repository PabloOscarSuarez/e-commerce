import { ADD_BOOK_TO_CART } from "../../constants";

const initialState = {
  booksToCart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      return {
        ...state,
        booksToCart: [...state.booksToCart, action.bookToCart]
      };

    default:
      return state;
  }
};
