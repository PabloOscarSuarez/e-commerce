import { combineReducers } from "redux";
// import moviesReducer from "./movies-reducer";
// import searchReducer from "./search-reducer";
import authorReducer from "./author-reducer";
import genreReducer from "./genre-reducer";
import bookReducer from "./book-reducer";
import cartReducer from "./cart-reducer";

export default combineReducers({
  authors: authorReducer,
  genres: genreReducer,
  books: bookReducer,
  cart: cartReducer
});
