import merge from 'lodash/merge';

import {
    RECEIVE_BUSINESSES,
    RECEIVE_BUSINESS
} from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_BUSINESS:
            const newBusiness = { [action.business.id]: action.business};
            return merge({}, state, newBusiness);
        case RECEIVE_BUSINESSES:
            return action.businesses;
        default:
            return state;
    }
}

export default businessesReducer;