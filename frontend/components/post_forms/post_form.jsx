import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            title:'',
            body: '',
            post_type: ''
        })
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state);
        modal.style.display = 'none';

    }

    handleChange(field) {
        
        console.log(this.state);
        return e => this.setState({[field]: e.currentTarget.value})
    }

    componentDidMount() {
        let modal = document.getElementById('modal');
        let button = document.getElementById('modalButton');
        let span = document.getElementById('closeModal');
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
            <button id='modalButton'>Create new Post</button>
            <div id='modal' className='newPostFormDiv'>
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
                    <button className='newPostFormButton'>Create Post</button>
                <span id='closeModal'>Cancel</span>
                </form>
            </div>
            </>
        )
    }
}

export default PostForm;