import axios from 'axios'

import { RECEIVE_GENRES, RECEIVE_BOOKS_BY_GENRE, RECEIVE_BOOKS_BY_GENRE_IN_STOCK } from '../../constants';

const receiveGenres = (genres) => ({
  type: RECEIVE_GENRES,
  genres,
});

const receiveBooksOfGenre = (books) => ({
  type: RECEIVE_BOOKS_BY_GENRE,
  books,
});

const receiveBooksOfGenreInStock = (books) => ({
  type: RECEIVE_BOOKS_BY_GENRE_IN_STOCK,
  books,
});


export const createGenre = (reqbody) => dispatch => {
  console.log('SOY REQBODY DE ACTIONS DE GENRE', reqbody)
  return axios.post(`http://localhost:8000/genres/create`, reqbody)
    .then(genre => {
      console.log('soy el genre despues de ser creado', genre)
    })
}

export const fetchGenres = () => dispatch =>
  axios.get(`http://localhost:8000/genres`)
    .then(res => res.data)
    .then(genres => {
      // console.log(movies.Search ,'SOY MOVIES SEARCH')
      // var moviess = movies.Seach;
      // console.log(movies, 'SOY MOVIES')
      dispatch(receiveGenres(genres))
    });

// ESTA ES PARA EL ADMIN
export const fetchBooksofGenre = (genreName) => dispatch =>
  axios.get(`http://localhost:8000/genres/${genreName}`)
    .then(res => res.data)
    .then(genre => {
      // console.log('SOY GENRE.BOOKS',genre[0].books )
      // PORQUE ME DEVUELVE UN OBJETO
      dispatch(receiveBooksOfGenre(genre[0].books))
    });

// ESTA ES PARA EL USER PARA QUE SOLO VEA LOS QUE ESTAN EN STOCK
export const fetchBooksofGenreInStock = (genreId) => dispatch =>
  axios.get(`http://localhost:8000/genres/genres_in_stock/${genreId}`)
    .then(res => res.data)
    .then(books => {
      // console.log('SOY BOOKS EN EL ACTION', books )
      // PORQUE ME DEVUELVE UN OBJETO
      dispatch(receiveBooksOfGenreInStock(books))
    });

export const removeGenre = (genreId) => dispatch =>
  axios.delete(`http://localhost:8000/genres/${genreId}`)
    .then(res => res.data)
    .then(genres => {
      dispatch(receiveGenres(genres))
    });
