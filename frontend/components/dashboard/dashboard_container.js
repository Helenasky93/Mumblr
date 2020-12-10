import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {fetchAllPosts} from '../../actions/post_actions'
import {logout} from '../../actions/session_actions'
import {fetchAllLikes} from '../../actions/like_actions'
import {allUsers} from '../../actions/session_actions'
import {updateProfilePicture} from '../../actions/session_actions'
import {fetchAllFollows} from '../../actions/follow_actions'
import {getCurrentUser} from '../../actions/session_actions'


const mstp = state => ({
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.entities.users[state.session.id],
    users: state.entities.allUsers
});

const mdtp = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    logout: () => dispatch(logout()),
    fetchAllLikes: () => dispatch(fetchAllLikes()),
    allUsers: () => dispatch(allUsers()),
    updateProfilePicture: (user) => dispatch(updateProfilePicture(user)),
    fetchAllFollows: () => dispatch(fetchAllFollows()),
    getCurrentUser: (id) => dispatch(getCurrentUser(id))
});

export default connect(mstp,mdtp)(Dashboard);
