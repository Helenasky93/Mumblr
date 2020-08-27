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
        let media;
        if (post.post_type === "photo") {
            media = <img className="image" src={post.file_url} alt="showImage" />
        } else if (post.post_type === "video") {
            media = <video className="video" src={post.file_url} width="320" height="240" controls type="video" ></video>
        }
        return (
            <div key ={post.id} className='postContainer'>
                <div className='postBox'>
                    <div className='postTop'>
                        <div className='title'>{post.title}</div>
                        <div className='body'>{post.body}</div>
                        {media}
                    </div>
                </div>
                <EditPostForm post={post}/>
                <button onClick={() => this.props.deletePost(post.id)}>Delete Post</button>
            </div>
        )
    }
}

export default Post;