import { combineReducers } from "redux";
// import moviesReducer from "./movies-reducer";
// import searchReducer from "./search-reducer";
import authorReducer from "./author-reducer";
import genreReducer from "./genre-reducer";

export default combineReducers({
  authors: authorReducer,
  genres: genreReducer,
  //  search: searchReducer,
  //  users: userReducer,
});
