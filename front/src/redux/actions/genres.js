import axios from 'axios'

import { RECEIVE_GENRES } from '../../constants';

const receiveGenres = (genres) => ({
  type: RECEIVE_GENRES,
  genres,
});


export const createGenre = (reqbody) => dispatch =>{
    console.log('SOY REQBODY DE ACTIONS DE GENRE',reqbody)
    return axios.post(`http://localhost:8000/genres/create`, reqbody)
            .then(genre=>{
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
