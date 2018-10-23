import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const configureStore = (initalState) => {
    return createStore(
        reducers,
        initalState,
        applyMiddleware(thunk)
    );
}

const store = configureStore({});

export default store;