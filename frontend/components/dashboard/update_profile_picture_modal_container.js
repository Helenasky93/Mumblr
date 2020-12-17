import { updateProfilePicture } from '../../actions/session_actions';
import ProfilePictureModal from './update_profile_picture_modal';
import { connect } from 'react-redux';

const mstp = state => ({
    
    currentUser: state.entities.users[state.session.id]
   
});

const mdtp = dispatch => ({
    updateProfilePicture: (user) => dispatch(updateProfilePicture(user)),
    getCurrentUser: (id) => dispatch(getCurrentUser(id))
});

export default connect(mstp, mdtp)(ProfilePictureModal);
