import React from 'react';
import EditPostForm from '../post_forms/edit_post_form_container'

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
                        <img className="image" src={post.file_url} alt="showImage"/>
                    </div>
                </div>
                <EditPostForm post={post}/>
                <button onClick={() => this.props.deletePost(post.id)}>Delete Post</button>
            </div>
        )
    }
}

export default Post;