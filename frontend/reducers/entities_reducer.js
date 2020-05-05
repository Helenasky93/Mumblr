import {combineReducers} from 'redux';
import users from './users_reducer';
import postReducer from './post_reducer';

export default combineReducers ({
    users,
    posts: postReducer
})