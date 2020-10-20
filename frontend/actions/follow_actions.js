export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS'
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW'
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'

import * as followApiUtil from '../util/follow_api_util';

export const receiveAllFollows = (follows) => ({
    type: RECEIVE_ALL_FOLLOWS,
    follows
});

export const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow
});

export const removeFollow = (follow) => ({
    type: REMOVE_FOLLOW,
    follow
});

export const fetchAllFollows = () => dispatch => {
    followApiUtil.fetchAllFollows()
    .then(follows => dispatch(receiveAllFollows(follows)))
};

export const followUser = () => dispatch => {
    followApiUtil.followUser(userId)
    .then(follow => dispatch(receiveFollow(follow)))
};
export const unfollowUser = () => dispatch => {
    followApiUtil.unfollowUser(userId)
    .then(follow => dispatch(removeFollow(follow)))
};