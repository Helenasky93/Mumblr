import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {fetchAllPosts} from '../../actions/post_actions'
import {logout} from '../../actions/session_actions'


const mstp = state => ({
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.entities.users[state.session.id]
});

const mdtp = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    logout: () => dispatch(logout())
});

export default connect(mstp,mdtp)(Dashboard);
