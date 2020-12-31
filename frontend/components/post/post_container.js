import {connect} from 'react-redux';
import Post from './post';
import {deletePost} from '../../actions/post_actions'
import {likePost, unlikePost} from '../../actions/like_actions'


const mstp = (state,ownProps) => {
    const authorId = ownProps.post.author_id;
    let liked = false;
    
    Object.values(state.entities.likes).forEach((like) => {
        if (like["post_id"] === ownProps.post.id) {
            liked = true
        }
    });
    return {
        currentUser: state.session.currentUser,
        authorId: authorId,
        author: state.entities.users[authorId],
        liked: liked
    }
};

const mdtp = dispatch => {
    return {
        deletePost:(postId) => dispatch(deletePost(postId)),
        likePost:(postId) => dispatch(likePost(postId)),
        unlikePost:(postId) => dispatch(unlikePost(postId))
    }
}

export default connect(mstp,mdtp)(Post);