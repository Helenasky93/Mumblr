import React from 'react';
import Post from '../post/post_container';
import PostForm from '../post_forms/post_form_container';
import UsersSidebar from './users_sidebar';
import ProfilePictureModal from './update_profile_picture_modal_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // this.updateProfilePicture = this.updateProfilePicture.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        let user = this.props.currentUser
        // let followedUserIds = Object.values(this.props.currentUser.followed_users).map((follow) => {
        //     return follow.user_id
        // });
        this.state = {
            // id: user.id,
            // username: user.username,
            // email: user.email,
            // profile_picture: user.profile_picture,
            // profile_picture_url: user.profile_picture_url,
            show: false
            // followedUserIds: followedUserIds
        }
        
    }
    toggleModal(e) {
        // e.preventDefault()
        // this.setState({
        //     show: true
        // });
        this.setState({
            show: !this.state.show
        });
        // e.stopImmediatePropagation()
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.updateProfilePicture(user);
    }

    // updateProfilePicture(e) {
    //     e.preventDefault();
    //     const reader = new FileReader();
    //     const picture = e.currentTarget.files[0];
    //     reader.onloadend = () => {
    //         this.setState({ profile_picture_url: reader.result, profile_picture: picture });

    //     } 
    //     reader.readAsDataURL(picture);
    //     this.setState({profile_picture: e.currentTarget.files[0]});
        
        
    // }

    componentDidMount() {
        this.props.fetchAllPosts();
        this.props.fetchAllLikes();
        this.props.allUsers();
        this.props.fetchAllFollows();
        this.props.getCurrentUser(this.props.currentUser.id);
    }

    // componentDidUpdate() {
    //     this.props.fetchAllFollows();
    // }


    // static getDerivedStateFromProps(props, state) {
    //     let nextFollowedUserIds = Object.values(props.currentUser.followed_users).map((follow) => {
    //         return follow.user_id
    //     });
    //     return {followedUserIds: nextFollowedUserIds}

    // }

    // shouldComponentUpdate(nextProps) {
    //     let nextFollowedUserIds = Object.values(nextProps.currentUser.followed_users).map((follow) => {
    //         return follow.user_id
    //     });
    //     return this.state.followedUserIds === nextFollowedUserIds
    // }

    // componentDidUpdate() {
        
    //     this.setState({
    //         followedUserIds: nextFollowedUserIds
    //     });
       
    // }

    render() {
        
        let followedUserIds = Object.values(this.props.currentUser.followed_users).map((follow) => {
            return follow.user_id
        });
        // debugger
        // filter posts by author_id === current_user.id or author_id === current_user.followed_users.user_id
        let posts = this.props.posts;
        let currentUser = this.props.currentUser;
        // let followedUserIds = this.state.followedUserIds;

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
                            
                                {/* <label>change profile picture
                                    <form className="changeProfilePictureForm" onSubmit={this.handleSubmit}>
                                        <div>
                                            <div style={{display:"block",textAlign:"center",marginTop:"20%"}}>
                                                <label htmlFor="files"> <span className="btn">Select Image</span></label>
                                                <input style={{visibility: 'hidden', position: 'absolute'}} id="files" className="form-control" type="file" name="files" onChange={this.updateProfilePicture}/>

                                            </div>

                                        </div>
                                        
                                        <button className="changeProfilePictureButton">change</button>

                                    </form>

                                </label> */}
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
                <div >
                    <UsersSidebar allUsers={this.props.users} />
                </div>
            </div>
        )
    }
};

export default Dashboard;
