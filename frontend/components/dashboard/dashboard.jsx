import React from 'react';
import Post from '../post/post_container';

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
                <Post key={idx} post={post}/>
            )
        })
        return (
            <div className='dashboard'>
                <div>
                    {showPosts}
                </div>
            </div>
        )
    }
};

export default Dashboard;
