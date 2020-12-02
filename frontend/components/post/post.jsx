import React from 'react';
import EditPostForm from '../post_forms/edit_post_form_container'

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: this.props.author,
            liked:  this.props.liked,
            currentUser: this.props.currentUser
        }
        
        this.toggleLike = this.toggleLike.bind(this);
        this.edit = this.edit.bind(this);
    }

    componentDidUpdate(prevState) {
        if (this.props.liked != prevState.liked ) {
            this.setState({liked: this.props.liked})
        }
    }
    componentDidMount() {

    }

    toggleLike() {
        const post = this.props.post;
        // debugger
        if (this.state.liked) {
            this.props.unlikePost(post.id);
        } else {
            this.props.likePost(post.id);
        };
    };

    edit() {
        let post = this.props.post
        console.log(this.state.currentUser, this.state.author);
        if ((this.state.currentUser && this.state.author) && this.state.currentUser.id === this.state.author.id) {
            return (
                <EditPostForm post={post} />
            );
        };
    };
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
                {/* <EditPostForm post={post}/> */}
                {this.edit()}
                <button onClick={() => this.props.deletePost(post.id)}>Delete Post</button>
        <button onClick={this.toggleLike}>
            {this.state.liked ? 'Unlike' : 'Like'}
        </button>
        <div>{post.likes}</div>
            </div>
        )
    }
}

export default Post;