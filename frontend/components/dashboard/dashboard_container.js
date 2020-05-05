import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {fetchAllPosts} from '../../actions/post_actions'


const mstp = state => ({
    posts: Object.values(state.entities.posts)
});

const mdtp = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mstp,mdtp)(Dashboard);
