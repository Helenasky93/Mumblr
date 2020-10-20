import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _nullUser = Object.freeze({id: null});
const sessionReducer = (state = _nullUser, action) => {
    // console.log(action)
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = {
                id: action.currentUser.id,
                currentUser: action.currentUser
            };
            return newState;
        case LOGOUT_CURRENT_USER:
            return _nullUser;
    
        default:
            return state;
    };
};

export default sessionReducer;