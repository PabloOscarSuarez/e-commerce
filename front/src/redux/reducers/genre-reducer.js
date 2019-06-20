import { RECEIVE_GENRES, RECEIVE_BOOKS_BY_GENRE } from '../../constants'

const initialState = {
    list: [],
    booksByGenre: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_GENRES:
            return Object.assign({}, state, { list: action.genres });

        case RECEIVE_BOOKS_BY_GENRE:
            return Object.assign({}, state, { booksByGenre: action.books });

        default:
            return state;
    }
};
