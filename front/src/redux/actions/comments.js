import axios from "axios";
// import { RECEIVE_COMMENTS } from "../../constants";
import { fetchBook } from './books'

export const createComment = (reqbody) => dispatch => {
    console.log('SOY REQBODY DE ACTIONS DE COMMENTS', reqbody)
    return axios.post(`http://localhost:8000/comments/create`, reqbody)
        .then(res=>res.data)
        .then(book => {
            // console.log('SOY BOOK',book)
            dispatch(fetchBook(book.id))
        })
}

