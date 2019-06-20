import { RECEIVE_GENRES } from '../../constants'

const initialState = {
    list: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_GENRES:
            return Object.assign({}, state, { list: action.genres });

        default:
            return state;
    }
};
