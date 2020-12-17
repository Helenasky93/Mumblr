import React from 'react';
import Post from '../post/post_container';
// import avatar from '../../app/assets/images/default_avatar.png';


class UserShowPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            showPosts: null,
            isFollowing: null

        }
        
        console.log(this.props.users, "ALL USERS")
        this.handleFollow = this.handleFollow.bind(this);
        this.profilePicture = this.profilePicture.bind(this);
        
        
    }

    static getDerivedStateFromProps(props,state) {
        
        if (props.users.allUsers && props.posts.length && !state.user) {
            
            let user = props.users.allUsers[parseInt(props.match.params.id)];
            let isFollowing;
            let followedUserIds = Object.values(props.currentUser.followed_users).map(value => {
                return value.user_id;
            });
            
            console.warn(props.currentUser
                , 'FOLLOWED USERS')
            
           
            console.log(props.currentUser.followed_users.length, followedUserIds.includes(user.id), user.id)
            if (props.currentUser.followed_users.length && followedUserIds.includes(user.id)) {
                isFollowing = true
            } else {
                isFollowing = false
            };
            console.log(isFollowing, 'FOLLOWING')

            let posts = Object.values(props.posts).filter(value => {
                return value.author_id === user.id
            });

            let showPosts = posts.map((post, idx) => {
                return (
                    <div key={idx}>
                        <Post key={idx} post={post} />
                        <br />
                    </div>
                )
            });

            return { user: user, showPosts: showPosts, isFollowing: isFollowing };
        }
        return null;
    }

    componentDidMount() {
        this.props.allUsers();
        this.props.fetchAllPosts();
        this.props.fetchAllFollows();
        // this.setState({});
        
    }

    handleFollow() {
        let isFollowing = this.state.isFollowing;
        let user = this.state.user;

        if (isFollowing) {
            this.props.unfollowUser(user.id);
            this.setState({ isFollowing: false });
        } else {
            this.props.followUser(user.id);
            this.setState({ isFollowing: true });
        };
        this.props.fetchAllFollows();
        // this.setState({isFollowing: isFollowing})
        console.log(isFollowing, "FOLLOWING")

    }
    profilePicture() {
        console.log(this.state.user, "PROFILE PICTURE USER")
    if (this.state.user) {
        return (
            <img height='150' width='150' src={this.state.user.profile_picture_url || window.default_avatar } alt="profile_pic" />
        )
    }
};

    render() {
        
        let showFollow = "" 
        if (this.state.user.id !== this.props.currentUser.id) {
            showFollow = <button onClick={this.handleFollow}>{this.state.isFollowing ? "Unfollow" : "Follow"}</button>
        };
        console.log(this.state, "STATE")
        
        return(
            <div className="user-show-page">
                <hgroup>
                    <button onClick={this.props.logout}>Logout</button>
                    <br/>
                    {this.props.navLink}
                </hgroup>
                
                <div>
                    {this.profilePicture()}
                    {showFollow}
                </div>
                <div>
                    {this.state.showPosts}
                </div>
                
            </div >
        )
    }
}


export default UserShowPage;
