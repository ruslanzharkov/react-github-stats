import { combineReducers } from 'redux';
import {userStars} from './starred';

const reducers = combineReducers({
    userStars: userStars,
});

export default reducers;