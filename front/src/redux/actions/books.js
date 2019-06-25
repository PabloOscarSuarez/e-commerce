import axios from 'axios'
import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK,
  RECEIVE_BOOK_BY_TITLE,
  RECEIVE_ALL_BOOKS,
  SET_TITLE_SEARCHED
} from "../../constants";



export const receiveBooks = function (books) {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

export const bookSearched = title => ({
  type: SET_TITLE_SEARCHED,
  title
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

export const fetchAllBooks = () => dispatch => {
  axios
    .get("http://localhost:8000/books/all")
    .then(res => res.data)
    .then(books => {
      return dispatch(receiveAllBooks(books));
    })
};

export const fetchBook = id => dispatch =>
  axios
    .get(`http://localhost:8000/books/${id}`)
    .then(res => res.data)
    .then(book => dispatch(receiveBook(book)));

export const fetchBookByTitle = title => dispatch => {
  // console.log(title,'SOY TITLE DEL ACTION')
  return axios
    .get(`http://localhost:8000/books/search/${title}`)
    .then(res => res.data)
    .then(bookByTitle => dispatch(receiveBookByTitle(bookByTitle)));

}

export const setTitleSearched = (bookTitle) => dispatch => {
  dispatch(bookSearched(bookTitle));  
};

export const createBook = (reqbody) => dispatch => {
  console.log('SOY REQBODY DE ACTIONS DE BOOK', reqbody)
  return axios.post(`http://localhost:8000/books/create`, reqbody)
    .then(book => book)
}

export const editBook = (bookId, reqbody) => dispatch => {
  // console.log('SOY EL ID Y EL REQBODY DE ACTIONS EDIT DE BOOK', bookId, reqbody)
  return axios.put(`http://localhost:8000/books/edit/${bookId}`, reqbody)
    .then(res => res.data)
    .then(books => {
      dispatch(receiveAllBooks(books))
    })
}

export const editBookStock = (bookId, reqbody) => dispatch => {
  // console.log('SOY EL ID Y EL REQBODY DE ACTIONS EDIT DE BOOK', bookId, reqbody)
  return axios.put(`http://localhost:8000/books/edit_stock/${bookId}`, reqbody)
    .then(res => res.data)
    .then(books => {
      dispatch(receiveAllBooks(books))
    })
}


export const removeBook = (bookId) => dispatch =>
  axios.delete(`http://localhost:8000/books/${bookId}`)
    .then(res => res.data)
    .then(books => {
      dispatch(receiveAllBooks(books))
    });

