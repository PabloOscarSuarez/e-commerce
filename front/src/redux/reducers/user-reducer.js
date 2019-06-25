import { POST_NEW_USER, POST_LOGGIN_USER, USER_LOGOUT} from "../../constants";

const initialState = {
  user: {},
  

};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_NEW_USER:
      return {...state, user:action.newUser}
    case POST_LOGGIN_USER:
      return {...state, user:action.userData}
    case USER_LOGOUT:
      return {...state, user:{}}
    default:
      return state;
  }
};
