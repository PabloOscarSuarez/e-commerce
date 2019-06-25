import { RECEIVE_SALES, RECEIVE_SALE, RECEIVE_SALES_BY_STATUS } from '../../constants'

const initialState = {
    list: [],
    salesByStatus: [],
    selectedSale: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SALES:
            return Object.assign({}, state, { list: action.sales });

        case RECEIVE_SALE:
            return Object.assign({}, state, { selectedSale: action.sale });

        case RECEIVE_SALES_BY_STATUS:
            return Object.assign({}, state, { salesByStatus: action.sales });

        default:
            return state;
    }
};
