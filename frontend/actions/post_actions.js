import * as postApiUtil from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = (posts) => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    }
};

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
};

const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId
    }
};

export const fetchAllPosts = () => dispatch => {
    postApiUtil.fetchAllPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
};

export const fetchSinglePost = (postId) => dispatch => {
    postApiUtil.fetchSinglePost(postId)
    .then(post => dispatch(receivePost(post)))
};

export const createPost = (post) => dispatch => {
    console.log(post);
    postApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
};

export const updatePost = post => dispatch => {
    postApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
};

export const deletePost = postId => dispatch => {
    postApiUtil.deletePost(postId)
    .then(post => dispatch(removePost(post.id)))
};

