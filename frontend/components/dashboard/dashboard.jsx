import React from 'react';
import Post from '../post/post_container';
import PostForm from '../post_forms/post_form_container';
import UsersSidebar from './users_sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.updateProfilePicture = this.updateProfilePicture.bind(this);
        let user = this.props.currentUser
        this.state = {
            id: user.id,
            username: user.username,
            email: user.email,
            profile_picture: user.profile_picture,
            profile_picture_url: user.profile_picture_url
        }
        
    }

    updateProfilePicture(e) {
        e.preventDefault();
        const reader = new FileReader();
        const picture = e.currentTarget.files[0];
        reader.onloadend = () => 
        this.setState({ profile_picture_url: reader.result, profile_picture: picture })
        reader.readAsDataURL(picture);
        this.setState({profile_picture: e.currentTarget.files[0]});
        this.props.updateProfilePicture(this.state)
        
    }

    componentDidMount() {
        debugger
        this.props.fetchAllPosts();
        this.props.fetchAllLikes();
        this.props.allUsers();
    }

    render() {
        let posts = this.props.posts;
        let showPosts = posts.map((post,idx) => {
            return (
                <div key={idx}>
                    <Post key={idx} post={post}/>
                    <br/>

                </div>
            )
        })
        return (
            <div className='dashboard'>
                <hgroup className='greetingBox'>
                    <h2>Hi, {(this.props.currentUser.username)}!</h2>
                    <button onClick={this.props.logout}>Log Out</button>
                    <br/>
                    <label>change profile picture
                    <input type="file" className="updateProfilePictureInput"/>

                    </label>
                </hgroup>

                <PostForm />
                <div className='leftColumn'>
                    {showPosts}
                </div>
                <UsersSidebar allUsers={this.props.users} />
            </div>
        )
    }
};

export default Dashboard;
