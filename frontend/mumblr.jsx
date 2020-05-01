import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './root'
import * as sessionApiUtil from './util/session_api_util'
import {login} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    // testing
    
    
    //end of testing

    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
   
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})