import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './root'
import * as postApiUtil from './util/post_api_util'

document.addEventListener('DOMContentLoaded', () => {
    // testing
    window.fetchAllPosts = postApiUtil.fetchAllPosts;
    window.createPost = postApiUtil.createPost;
    
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