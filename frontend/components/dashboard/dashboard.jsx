import React from 'react';
import Post from '../post/post_container';
import PostForm from '../post_forms/post_form_container'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {
        let posts = this.props.posts;
        let showPosts = posts.map((post,idx) => {
            return (
                <div>
                    <Post key={idx} post={post}/>
                    <br/>

                </div>
            )
        })
        return (
            <div className='dashboard'>
                <hgroup class='greetingBox'>
                    <h2>Hi, {(this.props.currentUser.username)}!</h2>
                    <button onClick={this.props.logout}>Log Out</button>
                </hgroup>

                <PostForm />
                <div className='leftColumn'>
                    {showPosts}
                </div>
            </div>
        )
    }
};

export default Dashboard;
