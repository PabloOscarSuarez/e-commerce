import axios from "axios";
import { POST_NEW_USER, POST_LOGGIN_USER, USER_LOGOUT, RECEIVE_ADMINS } from "../../constants";

export const postNewUser = function(newUser) {

  return {
    type: POST_NEW_USER,
    newUser
  };
};
export const postLogginUser = function(userData) {

  return {
    type: POST_LOGGIN_USER,
    userData
  };
};
export const userLogout = function () {
  return {
    type: USER_LOGOUT,
  }
}

export const receiveAdmins = function (admins) {
  return {
    type: RECEIVE_ADMINS,
    admins
  };
};

export const createNewUser = newUserData => dispatch => {
  
  return axios
    .post("http://localhost:8000/users/register", newUserData)
    .then(res => res.data)
    .then(newUser => dispatch(postNewUser(newUser)));
};

export const logginUser = userData => dispatch =>{
  
  return axios
  .post("http://localhost:8000/users/login", userData)
  .then(res => res.data)
  .then(userData => dispatch(postLogginUser(userData)))
}

export const fetchLoggedUser = userData => dispatch =>{
 
  return axios.get("http://localhost:8000/users/logged", userData)
  .then(res=>res.data)
  .then(userData =>dispatch(postLogginUser(userData)))
}

export const logout = () => dispatch => {
  axios.get("http://localhost:8000/users/logout")
  .then(() => dispatch(userLogout()))
  
}

export const fetchAdmins = () => dispatch =>{
 
  return axios.get("http://localhost:8000/users/admins", )
  .then(res=>res.data)
  .then(admins =>dispatch(receiveAdmins(admins)))
}


export const removeAdmin = (adminId) => dispatch =>
  axios.delete(`http://localhost:8000/users/admins/${adminId}`)
    .then(res => res.data)
    .then(admins => {
      // console.log('SOY BOOKS EN EL ACTION', books)
      dispatch(receiveAdmins(admins))
    });