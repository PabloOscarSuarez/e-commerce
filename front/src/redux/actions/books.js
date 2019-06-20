import axios from 'axios'

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
