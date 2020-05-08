import {connect} from 'react-redux';
import Post from './post';
import {deletePost} from '../../actions/post_actions'

const mstp = (state,ownProps) => {
    const authorId = ownProps.post.author_id;
    return {
        currentUser: state.session.currentUser,
        authorId: authorId,
        author: state.entities.users[authorId]
    }
};

const mdtp = dispatch => {
    return {
        deletePost:(postId) => dispatch(deletePost(postId))
    }
}

export default connect(mstp,mdtp)(Post);