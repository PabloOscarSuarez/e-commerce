import { combineReducers } from "redux";
// import moviesReducer from "./movies-reducer";
// import searchReducer from "./search-reducer";
import authorReducer from "./author-reducer";
import genreReducer from "./genre-reducer";
import bookReducer from "./book-reducer";
import cartReducer from "./cart-reducer";
import userReducer from "./user-reducer";
import commentsReducer from "./comment-reducer";
import salesReducer from "./sale-reducer";
import statusReducer from "./status-reducer";

export default combineReducers({
  authors: authorReducer,
  genres: genreReducer,
  books: bookReducer,
  cart: cartReducer,
  sales: salesReducer,
  statuses: statusReducer,
  user: userReducer,
  comments: commentsReducer
});
