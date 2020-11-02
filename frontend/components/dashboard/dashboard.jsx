import React from 'react';
import Post from '../post/post_container';
import PostForm from '../post_forms/post_form_container';
import UsersSidebar from './users_sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
