import React from 'react';
import Post from '../post/post_container';

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
            
            console.log(followedUserIds, 'FOLLOWED USERS')
            
           
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

            return({ user: user, showPosts: showPosts, isFollowing: isFollowing });
        }
    }

    componentDidMount() {
        this.props.allUsers();
        this.props.fetchAllPosts();
        this.props.fetchAllFollows();
        
    }

    handleFollow() {
        let isFollowing;
        let user = this.state.user;
        let followedUserIds = Object.values(this.props.currentUser.followed_users).map(value => {
            return value.user_id;
        });
        console.log(user);
        let currentUser = this.props.currentUser;
        if (currentUser.followed_users.length && followedUserIds.includes(user.id)) {
            isFollowing = true
        } else {
            isFollowing = false
        };

        if (isFollowing) {
            this.props.unfollowUser(currentUser.id);
        } else {
            this.props.followUser(currentUser.id);
        };
        console.log(isFollowing, "FOLLOWING")
    }
    profilePicture() {
        console.log(this.state.user, "PROFILE PICTURE USER")
    if (this.state.user) {
        return (
            <img height='150' width='150' src={this.state.user.profile_picture_url} alt="profile pic" />
        )
    }
};

    render() {
        
        
        console.log(this.state, "STATE")
        
        return(
            <div>
                <hgroup>
                    <button onClick={this.props.logout}>Logout</button>
                    <br/>
                    {this.props.navLink}
                </hgroup>
                
                <div>
                    {this.profilePicture()}
        <button onClick={this.handleFollow}>{this.state.isFollowing ? "Unfollow" : "Follow" }</button>
                </div>
                <div>
                    {this.state.showPosts}
                </div>
                
            </div >
        )
    }
}


export default UserShowPage;
