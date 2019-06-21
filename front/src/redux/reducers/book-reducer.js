import { RECEIVE_BOOKS, RECEIVE_BOOK, RECEIVE_BOOK_BY_TITLE, RECEIVE_ALL_BOOKS } from "../../constants";

const init = {
  books: [],
  selectedBook: {},
  allBooks : [],
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

    case RECEIVE_BOOK_BY_TITLE:
      return {...state, bookByTitle : action.bookByTitle}

    default:
      return state;
  }
};
