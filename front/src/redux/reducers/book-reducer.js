import { RECEIVE_BOOKS, RECEIVE_BOOK, RECEIVE_BOOK_BY_TITLE, RECEIVE_ALL_BOOKS, SET_TITLE_SEARCHED } from "../../constants";

const init = {
  books: [],
  selectedBook: {},
  allBooks : [],
  titleSearched: '',
  bookByTitle: []
};

export default (state = init, action) => {
  switch (action.type) {
    
    case RECEIVE_BOOKS:
      return { ...state, books: action.books };

    case RECEIVE_ALL_BOOKS:
      return { ...state, allBooks: action.books };
      
    case RECEIVE_BOOK:
      return Object.assign({}, state, { selectedBook: action.book });

    case SET_TITLE_SEARCHED:
      return Object.assign({}, state, { titleSearched: action.title });

    case RECEIVE_BOOK_BY_TITLE:
      return {...state, bookByTitle : action.bookByTitle}

    default:
      return state;
  }
};
