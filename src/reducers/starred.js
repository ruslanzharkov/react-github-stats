import * as actionTypes from '../constants/index';

export const starsStat = (state = [], action) => {
    switch(action.type) {
        case actionTypes.GET_USER_STARRED:
            return action.payload;
        default: return state;
    }
};