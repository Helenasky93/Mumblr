import React from 'react';
import Post from '../post/post_container';
import PostForm from '../post_forms/post_form_container';
import UsersSidebar from './users_sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.updateProfilePicture = this.updateProfilePicture.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let user = this.props.currentUser
        this.state = {
            id: user.id,
            username: user.username,
            email: user.email,
            profile_picture: user.profile_picture,
            profile_picture_url: user.profile_picture_url
        }
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.updateProfilePicture(user);
    }

    updateProfilePicture(e) {
        e.preventDefault();
        const reader = new FileReader();
        const picture = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ profile_picture_url: reader.result, profile_picture: picture });

        } 
        reader.readAsDataURL(picture);
        this.setState({profile_picture: e.currentTarget.files[0]});
        
        
    }

    componentDidMount() {
        this.props.fetchAllPosts();
        this.props.fetchAllLikes();
        this.props.allUsers();
    }

    render() {
        let posts = this.props.posts;
        console.log(posts)
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
                        <form className="changeProfilePictureForm" onSubmit={this.handleSubmit}>
                            <input type="file" className="updateProfilePictureInput" onChange={this.updateProfilePicture}/>
                            <button className="changeProfilePictureButton">update</button>

                        </form>

                    </label>
                </hgroup>
                <img height="100" width="100" src={this.props.currentUser.profile_picture_url} alt="profile pic" />
                <PostForm />
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
