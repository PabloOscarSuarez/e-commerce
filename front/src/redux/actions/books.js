import axios from "axios";
import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK,
  RECEIVE_BOOK_BY_TITLE
} from "../../constants";

export const receiveBooks = function(books) {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});
export const receiveBookByTitle = bookByTitle => ({
  type: RECEIVE_BOOK_BY_TITLE,
  bookByTitle
});

export const fetchBooks = () => dispatch => {
  axios
    .get("http://localhost:8000/books")
    .then(res => res.data)
    .then(books => {
      return books;
    })
    .then(books => dispatch(receiveBooks(books)));
};

export const fetchBook = id => dispatch =>
  axios
    .get(`http://localhost:8000/books/${id}`)
    .then(res => res.data)
    .then(book => dispatch(receiveBook(book)));

export const fetchBookByTitle = title => dispatch =>{

   return axios
      .get(`http://localhost:8000/books/search/${title}`)
      .then(res => res.data)
      .then(bookByTitle => dispatch(receiveBookByTitle(bookByTitle)));

}

export const createBook = (reqbody) => dispatch =>{
    console.log('SOY REQBODY DE ACTIONS DE BOOK',reqbody)
    return axios.post(`http://localhost:8000/books/create`, reqbody)
            .then(book=>{
                console.log('soy el book despues de ser creado', book)
            })
        // .then(res => res.data)
        // .then(loggedUser => {
        //     dispatch(receiveLoggedUser(loggedUser));
        //     return loggedUser
        // })
        // .catch(err => {
        //     return 'Error'
        // })
}
