import axios from 'axios'
import { RECEIVE_AUTHORS } from '../../constants';

const receiveAuthors = (authors) => ({
  type: RECEIVE_AUTHORS,
  authors,
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