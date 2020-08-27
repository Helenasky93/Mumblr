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
            id: postId,
            fileURL: '',
            file: ''

        })
        this.handleSubmit = this.handleSubmit.bind(this);
        this.post = this.props.post || {id: 'create'}

    };

    handleFile(e) {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ fileUrl: reader.result, file: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ fileUrl: "", file: null });
        }
        this.setState({file: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        e.preventDefault();
        // if(this.post.id !== 'create') {
        //     this.props.action({...this.state, id: this.post.id});
        // } else {
        //     this.props.action(this.state);
        // };
        // debugger
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        formData.append('post[body]', this.state.body);
        formData.append('post[post_type]', this.state.post_type);
        formData.append('post[file]', this.state.file);
        // put fileurl appending in if/else statement just in case
        // posts are created without a file
        formData.append('post[file_url]', this.state.fileURL);
        // debugger
        
        this.props.action(formData);
        let modal = document.getElementById('modal' + this.post.id);
        
        modal.style.display = 'none';

    }


    handleChange(field) {
        
        // const reader = new FileReader();
        // const file = field.files[0];
        // reader.onloadend = () =>
        //     this.setState({ fileUrl: reader.result, file: file });

        // if (file) {
        //     reader.readAsDataURL(file);
        // } else {
        //     this.setState({ fileUrl: "", file: null });
        // }
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

        console.log(this.state);

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
                    <label>File
                        <input type="file" className="postFormFile" onChange={this.handleFile.bind(this)} />
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