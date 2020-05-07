import {connect} from 'react-redux';
import {createPost} from '../../actions/post_actions';
import PostForm from './post_form';

const mstp = state => ({
    currentUser: state.session.currentUser
});

const mdtp = dispatch => ({
    createPost: (post) => dispatch(createPost(post))
});

export default connect(mstp,mdtp)(PostForm);