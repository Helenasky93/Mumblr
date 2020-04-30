import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionApiUtil from './util/session_api_util'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    // testing
    window.logout = sessionApiUtil.logout;
    window.login = sessionApiUtil.login;
    window.signup = sessionApiUtil.signup;
    
    //end of testing

    
    const store = configureStore();
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Mumblr</h1>, root)
})