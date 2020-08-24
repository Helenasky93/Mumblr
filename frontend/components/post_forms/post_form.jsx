import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        let postId;
        if(this.props.post) {
            postId = this.props.post.id;
        } else {
            postId = null
        };
        this.state = ({
            title:'',
            body: '',
            post_type: '',
            id: postId

        })
        this.handleSubmit = this.handleSubmit.bind(this);
        this.post = this.props.post || {id: 'create'}

    };

    handleSubmit(e) {
        e.preventDefault();
        // if(this.post.id !== 'create') {
        //     this.props.action({...this.state, id: this.post.id});
        // } else {
        //     this.props.action(this.state);
        // };
        // debugger
        this.props.action(this.state);
        let modal = document.getElementById('modal' + this.post.id);

        modal.style.display = 'none';

    }

    handleChange(field) {
        
    
        return e => this.setState({[field]: e.currentTarget.value})
    }

    componentDidMount() {
        let modal = document.getElementById('modal' + this.post.id);
        let button = document.getElementById('modalButton' + this.post.id);
        let span = document.getElementById('closeModal' + this.post.id);
        button.onclick = () => modal.style.display = 'block';
        span.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        };
    }

    render() {

        

        return (
            <>
            <button className='modalButton' id={'modalButton' + this.post.id}>{this.props.formType}</button>
            <div id={'modal' + this.post.id} className='newPostFormDiv'>
                <form onSubmit={this.handleSubmit} className='newPostForm'>
                    <label>Title
                        <input className='postFormTitle' onChange={this.handleChange('title')} type="text" value={this.state.title}/>
                    </label>
                    <label>Body
                        <input className='postFormBody' onChange={this.handleChange('body')} type="description" value={this.state.body}/>
                    </label>
                    <label>Type
                        <input onChange={this.handleChange('post_type')} type="text" value={this.state.post_type}/>
                    </label>
        <button className='newPostFormButton'>{this.props.formType}</button>
                <span id={'closeModal' + this.post.id}>Cancel</span>
                </form>
            </div>
            </>
        )
    }
}

export default PostForm;