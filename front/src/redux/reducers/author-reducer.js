import { RECEIVE_AUTHORS, RECEIVE_BOOKS_BY_AUTHOR } from '../../constants'

const initialState = {
    list: [],
    booksByAuthor: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_AUTHORS:
            return Object.assign({}, state, { list: action.authors });

        case RECEIVE_BOOKS_BY_AUTHOR:
            return Object.assign({}, state, { booksByAuthor: action.books });

        default:
            return state;
    }
};
