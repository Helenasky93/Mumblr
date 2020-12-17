import {connect} from 'react-redux';
import {updatePost} from '../../actions/post_actions';
import EditPostForm from './edit_post_form';
import {fetchSinglePost} from '../../actions/post_actions'

const mstp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        post: ownProps.post,
        formType: 'Update'
    };
};

const mdtp = dispatch => ({
    action: post => dispatch(updatePost(post)),
    fetchSinglePost: postId => dispatch(fetchSinglePost(postId))
});

export default connect(mstp,mdtp)(EditPostForm);

