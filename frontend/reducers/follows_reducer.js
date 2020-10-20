import {
    RECEIVE_ALL_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../actions/follow_actions'
import likesReducer from './likes_reducer';

const followsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_FOLLOWS:
            return Object.assign({}, oldState, action.follows);
        case RECEIVE_FOLLOW:
            newState[action.follow.id] = action.follow;
            return newState;
        case REMOVE_FOLLOW:
            delete newState[action.like.id];
            return newState;
        default:
            return oldState;

    }

}

export default followsReducer;