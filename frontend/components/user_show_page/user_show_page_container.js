import {connect} from 'react-redux';
import UserShowPage from './user_show_page';
import {logout} from '../../actions/session_actions';
import {allUsers} from '../../actions/session_actions';

const mstp = state => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.allUsers
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(UserShowPage);
