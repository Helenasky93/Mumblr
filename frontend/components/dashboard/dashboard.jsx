import React from 'react';
import Post from '../post/post_container';
import PostForm from '../post_forms/post_form_container';
import UsersSidebar from './users_sidebar';
import ProfilePictureModal from './update_profile_picture_modal_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        // let user = this.props.currentUser
        
        this.state = {
            show: false
        }
        
    }
    toggleModal(e) {
        
        this.setState({
            show: !this.state.show
        });

    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.updateProfilePicture(user);
    }


    componentDidMount() {
        this.props.fetchAllPosts();
        this.props.fetchAllLikes();
        this.props.allUsers();
        this.props.fetchAllFollows();
        this.props.getCurrentUser(this.props.currentUser.id);
    }


    render() {
        
        let followedUserIds = Object.values(this.props.currentUser.followed_users).map((follow) => {
            return follow.user_id
        });
        
        let posts = this.props.posts;
        let currentUser = this.props.currentUser;
        

        console.log(followedUserIds, "FOLLOWED USERS IDS")
        let showPosts = posts.map((post,idx) => {
            if (post.author_id === currentUser.id || followedUserIds.includes(post.author_id) ) {

                return (
                    <div key={idx}>
                        <Post key={idx} post={post}/>
                        <br/>
    
                    </div>
                )
            }
        })
        return (
            <div className='dashboard'>
                <div className="userInfo">
                    <ProfilePictureModal onClose={this.toggleModal} show={this.state.show} />

                    <img className="profile-picture-dashboard" height="100" width="100" src={this.props.currentUser.profile_picture_url || window.default_avatar} alt="profile_pic" />
                    <div className='greetingBox'>
                        <h2>Hi, {(this.props.currentUser.username)}!</h2>
                        <div className="dropdown"> <img className="dropbtn" src={window.user_icon} alt="user_icon"/>
                            <div className="dropdown-content">

                                <button onClick={this.props.logout}>Log Out</button>
                                <button className="toggle-button"
                                    id="centered-toggle-button" onClick={e => {
                                    this.toggleModal();
                                }}>change picture

                                </button>
                            
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="postForm">

                    <PostForm />
                </div>
                <div className='leftColumn'>
                    {showPosts}
                </div>
                <div className="users-sidebar-dashboard">Check out other people!
                    <UsersSidebar allUsers={this.props.users} />
                </div>
            </div>
        )
    }
};

export default Dashboard;
