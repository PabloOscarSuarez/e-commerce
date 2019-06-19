import {RECEIVE_BOOKS}  from '../../constants';

const init = {
    books : []

}

export default (state = init, action) =>{

  switch (action.type) {
    case RECEIVE_BOOKS:
      
      return {...state, books:action.books}
  
    default: return state;
      
  }
}

