import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            author: null || this.props.author
        })
    }

    render() {
        let post = this.props.post
        return (
            <div key ={post.id} className='postContainer'>
                <div className='postBox'>
                    <div className='postTop'>
                        <div className='title'>{post.title}</div>
                        <div className='body'>{post.body}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;