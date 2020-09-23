export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
import * as likeApiUtil from '../util/like_api_util';


export const receiveAllLikes = (likes) => ({
    type: RECEIVE_ALL_LIKES,
    likes
});

export const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

export const removeLike = (like) => ({
    type: REMOVE_LIKE,
    like

});

export const fetchAllLikes = () => dispatch => {
    likeApiUtil.fetchAllLikes()
    .then(likes => dispatch(receiveAllLikes(likes)))
};

export const likePost = (postId) => dispatch => {
    likeApiUtil.likePost(postId)
    .then(like => dispatch(receiveLike(like)))
};

export const unlikePost = (postId) => dispatch => {
    likeApiUtil.unlikePost(postId)
    .then(like => dispatch(removeLike(like)))
};




