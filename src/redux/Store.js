import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {BookReducer} from './reducers/BookReducer';
import {UserReducer} from './reducers/UserReducer';
const rootReducer = combineReducers({
    BookReducer,
    UserReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));