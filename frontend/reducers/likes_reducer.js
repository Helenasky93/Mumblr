import {
    RECEIVE_ALL_LIKES,
    RECEIVE_LIKE,
    REMOVE_LIKE
} from '../actions/like_actions'

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
            return Object.assign({}, oldState, action.likes);
        case RECEIVE_LIKE:
            let newState = Object.assign({}, oldState);
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            newState = Object.assign({}, oldState);
            delete newState[action.like.id];
            return newState;
        default:
            return oldState;

    };

};

export default likesReducer;