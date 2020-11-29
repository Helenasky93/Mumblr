import { RECEIVE_ALL_USERS } from '../actions/session_actions';

const allUsersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            
            return Object.assign({}, state, {allUsers: action.allUsers});
    
        default:
            return state;
    }
}

export default allUsersReducer;