import { POST_NEW_USER, POST_LOGGIN_USER, USER_LOGOUT, RECEIVE_ADMINS, RECEIVE_LOGGED_USER } from "../../constants";

const initialState = {
  user: {},
  admins: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case POST_NEW_USER:
    //   return { ...state, user: action.newUser }
    // case POST_LOGGIN_USER:
    //   return { ...state, user: action.userData }

    case RECEIVE_LOGGED_USER:
      return Object.assign({}, state, { user: action.loggedUser });

    case USER_LOGOUT:
    
      return { ...state, user: {} }

    case RECEIVE_ADMINS:
      return { ...state, admins: action.admins };

    default:
      return state;
  }
};
