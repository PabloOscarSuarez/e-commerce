import { RECEIVE_BOOKS, RECEIVE_BOOK, RECEIVE_BOOK_BY_TITLE } from "../../constants";

const init = {
  books: [],
  selectedBook: {},
  bookByTitle: []
};

export default (state = init, action) => {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...state, books: action.books };
      
    case RECEIVE_BOOK:
      return Object.assign({}, state, { selectedBook: action.book });

    case RECEIVE_BOOK_BY_TITLE:
      return {...state, bookByTitle : action.bookByTitle}

    default:
      return state;
  }
};
