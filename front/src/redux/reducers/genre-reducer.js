import { RECEIVE_GENRES, RECEIVE_BOOKS_BY_GENRE, RECEIVE_BOOKS_BY_GENRE_IN_STOCK } from '../../constants'

const initialState = {
    list: [],
    booksByGenre: [],
    booksByGenreInStock: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_GENRES:
            return Object.assign({}, state, { list: action.genres });

        case RECEIVE_BOOKS_BY_GENRE:
            return Object.assign({}, state, { booksByGenre: action.books });

        case RECEIVE_BOOKS_BY_GENRE_IN_STOCK:
            return Object.assign({}, state, { booksByGenreInStock: action.books });

        default:
            return state;
    }
};
