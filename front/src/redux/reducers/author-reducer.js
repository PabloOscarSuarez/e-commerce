import { RECEIVE_AUTHORS } from '../../constants'

const initialState = {
    list: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_AUTHORS:
            return Object.assign({}, state, { list: action.authors });

        default:
            return state;
    }
};
