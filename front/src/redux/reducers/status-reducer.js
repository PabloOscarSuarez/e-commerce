import { RECEIVE_STATUSES,  } from '../../constants'

const initialState = {
    list: [],
    // selectedSale: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_STATUSES:
            return Object.assign({}, state, { list: action.statuses });

        // case RECEIVE_SALE:
        //     return Object.assign({}, state, { selectedSale: action.sale });

        default:
            return state;
    }
};
