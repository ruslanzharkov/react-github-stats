import { combineReducers } from 'redux';
import {starsStat} from './starred';

const reducers = combineReducers({
    userStars: starsStat,
});

export default reducers;