import connect from 'react-redux';
import Post from './post';

const mstp = (state,ownProps) => {
    const authorId = ownProps.post.author_id;
    return {
        currentUser: state.session.currentUser,
        authorId: authorId,
        author: state.entities.users[authorId]
    }
};

export default connect(mstp)(Post);