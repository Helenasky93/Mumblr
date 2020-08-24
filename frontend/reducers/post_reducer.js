import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST
} from '../actions/post_actions'

const postReducer =  (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            console.log(action.posts);
            let postsArray = Object.values(action.posts)
            const posts = {};
            postsArray.forEach(post => {
                posts[post.id] = post
            });
            return posts;
        case RECEIVE_POST:
            return Object.assign({}, oldState, {[action.post.id]: action.post});
        case REMOVE_POST:
            let newState = Object.assign({}, oldState);
            delete newState[action.postId];
            return newState;
    
        default:
            return oldState;
    }
};

export default postReducer;

