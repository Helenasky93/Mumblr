import {connect} from 'react-redux';
import UserShowPage from './user_show_page';
import { fetchAllPosts } from '../../actions/post_actions'
import {logout} from '../../actions/session_actions';
import {allUsers} from '../../actions/session_actions';
import {Link} from 'react-router-dom';
import React from 'react';

const mstp = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts).reverse(),
    users: state.entities.allUsers,
    navLink: <Link to="/">Home</Link>
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    allUsers: () => dispatch(allUsers()),
    fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mstp, mdtp)(UserShowPage);
