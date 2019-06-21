import axios from "axios";
import { ADD_BOOK_TO_CART } from "../../constants";

export const addBookToCart = function(bookToCart) {
  
  return {
    type: ADD_BOOK_TO_CART,
    bookToCart
  };
};
export const newBookToCart = bookToCart => dispatch =>
  dispatch(addBookToCart(bookToCart));

