import { RECEIVE_SALES, RECEIVE_SALE } from '../../constants'

const initialState = {
    list: [],
    selectedSale: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SALES:
            return Object.assign({}, state, { list: action.sales });

        case RECEIVE_SALE:
            return Object.assign({}, state, { selectedSale: action.sale });

        default:
            return state;
    }
};
