import axios from 'axios'
import { RECEIVE_AUTHORS, RECEIVE_BOOKS_BY_AUTHOR } from '../../constants';

const receiveAuthors = (authors) => ({
  type: RECEIVE_AUTHORS,
  authors,
});

const receiveBooksOfAuthor = (books) => ({
  type: RECEIVE_BOOKS_BY_AUTHOR,
  books,
});


export const createAuthor = (reqbody) => dispatch => {
  return axios.post(`http://localhost:8000/authors/create`, reqbody)
}

export const fetchAuthors = () => dispatch =>
  axios.get(`http://localhost:8000/authors`)
    .then(res => res.data)
    .then(authors => {
      // console.log(movies.Search ,'SOY MOVIES SEARCH')
      // var moviess = movies.Seach;
      // console.log(movies, 'SOY MOVIES')
      dispatch(receiveAuthors(authors))
    });

export const fetchBooksofAuthor = (authorId) => dispatch =>
  axios.get(`http://localhost:8000/books/author/${authorId}`)
    .then(res => res.data)
    .then(books => {
      // console.log('SOY BOOKS EN EL ACTION', books)
      dispatch(receiveBooksOfAuthor(books))
    });

export const removeAuthor = (authorId) => dispatch =>
  axios.delete(`http://localhost:8000/authors/${authorId}`)
    .then(res => res.data)
    .then(authors => {
      // console.log('SOY BOOKS EN EL ACTION', books)
      dispatch(receiveAuthors(authors))
    });