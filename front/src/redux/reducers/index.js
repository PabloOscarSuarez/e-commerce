import { combineReducers } from "redux";
// import moviesReducer from "./movies-reducer";
// import searchReducer from "./search-reducer";
import authorReducer from "./author-reducer";
import genreReducer from "./genre-reducer";
import bookReducer from "./book-reducer";

export default combineReducers({
  authors: authorReducer,
  genres: genreReducer,
  books: bookReducer,
});
