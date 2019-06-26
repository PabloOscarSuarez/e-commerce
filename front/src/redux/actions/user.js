import axios from "axios";
import { POST_NEW_USER, POST_LOGGIN_USER, USER_LOGOUT, RECEIVE_ADMINS, RECEIVE_LOGGED_USER } from "../../constants";

// export const postNewUser = function (newUser) {

//   return {
//     type: POST_NEW_USER,
//     newUser
//   };
// };
// export const postLogginUser = function (userData) {

//   return {
//     type: POST_LOGGIN_USER,
//     userData
//   };
// };


const receiveLoggedUser = (loggedUser) => ({
    type: RECEIVE_LOGGED_USER,
    loggedUser,
});

export const userLogout = function() {
    return {
        type: USER_LOGOUT,
    }
}

export const receiveAdmins = function(admins) {
    return {
        type: RECEIVE_ADMINS,
        admins
    };
};

export const createNewUser = newUserData => dispatch => {

    return axios
        .post("http://localhost:8000/users/register", newUserData)
        .then(res => res.data)
        .then(newUser => dispatch(receiveLoggedUser(newUser)));
};

export const logginUser = userData => dispatch => {

    return axios
        .post("http://localhost:8000/users/login", userData)
        .then(res => res.data)
        .then(userData => {
            console.log('SOY EL USER DATA DEL ACTION LOGGEDUSER', userData)
            dispatch(receiveLoggedUser(userData))
        })
}

export const fetchLoggedUser = () => dispatch => {

    return axios.get("http://localhost:8000/users/logged")
        .then(res => res.data)
        .then(user => {
            dispatch(receiveLoggedUser(user))
        })
}

export const logout = () => dispatch => {
    // console.log('ENTRE AL AXIOS')
    axios.get("/users/logout")
        .then((res) => {
            // console.log(res.data, 'res.data')
            dispatch(userLogout())
        })

}


export const fetchAdmins = () => dispatch => {

    return axios.get("http://localhost:8000/users/admins")
        .then(res => res.data)
        .then(admins => dispatch(receiveAdmins(admins)))
}


export const removeAdmin = (adminId) => dispatch =>
    axios.delete(`http://localhost:8000/users/admins/${adminId}`)
    .then(res => res.data)
    .then(admins => {
        // console.log('SOY BOOKS EN EL ACTION', books)
        dispatch(receiveAdmins(admins))
    });


export const editUser = (userId, reqbody) => dispatch => {
    // console.log('SOY EL ID Y EL REQBODY DE ACTIONS EDIT DE BOOK', bookId, reqbody)
    return axios.put(`http://localhost:8000/users/edit/${userId}`, reqbody)
        .then(res => res.data)
        .then(user => {
            dispatch(receiveLoggedUser(user))
        })
}