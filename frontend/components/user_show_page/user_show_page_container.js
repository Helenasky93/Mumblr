import {connect} from 'react-redux';
import UserShowPage from './user_show_page';
import { fetchAllPosts } from '../../actions/post_actions'
import {logout} from '../../actions/session_actions';
import {allUsers} from '../../actions/session_actions';
import {followUser} from '../../actions/follow_actions';
import {unfollowUser} from '../../actions/follow_actions';
import {fetchAllFollows} from '../../actions/follow_actions'
import {Link} from 'react-router-dom';
import React from 'react';


const mstp = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts).reverse(),
    users: state.entities.allUsers,
    navLink: <Link className="home-button" to="/"></Link>
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    allUsers: () => dispatch(allUsers()),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    followUser: (user_id) => dispatch(followUser(user_id)),
    unfollowUser: (user_id) => dispatch(unfollowUser(user_id)),
    fetchAllFollows: () => dispatch(fetchAllFollows())
});

export default connect(mstp, mdtp)(UserShowPage);
