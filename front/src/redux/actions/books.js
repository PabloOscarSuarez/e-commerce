import axios from "axios";
import {RECEIVE_BOOKS} from "../../constants";

export const receiveBooks = function(books) {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const fetchBooks = () => dispatch => {

  axios.get("http://localhost:8000/books")
    .then(res => res.data)
    .then(books => {
      return books;
    })
    .then(books => dispatch(receiveBooks(books)));
};
