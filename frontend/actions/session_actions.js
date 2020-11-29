import * as sessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER

});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const receiveAllUsers = allUsers => ({
    type: RECEIVE_ALL_USERS,
    allUsers
})

export const signup = user => dispatch => {
    return sessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => (dispatch(receiveSessionErrors(err.responseJSON))))
};

export const login = user => dispatch => {
    return sessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => (dispatch(receiveSessionErrors(err.responseJSON))))
};

export const logout = () => dispatch => {
    return sessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
}

export const updateProfilePicture = user => dispatch => {
    // debugger
    console.log(user)
    return sessionApiUtil.updateProfilePicture(user)
    .then(user => {
        console.log('SOUPPPPPP', user)
        return dispatch(receiveCurrentUser(user))
    },
    err => {
        console.error('ERROR SOUP',err)
        return (dispatch(receiveSessionErrors(err.responseJSON)))
    })
}

export const allUsers = () => dispatch => {
    return sessionApiUtil.allUsers()
    .then(users => dispatch(receiveAllUsers(users)))
}
