import React from 'react'
import PostForm from './post_form'

class EditPostForm extends React.Component {
   componentDidMount() {
       return this.props.fetchSinglePost(this.props.post.id)
       
   }

   

    render() {
        const {action, formType, post } = this.props;
        if(!post) return null;

        return (
            <PostForm
            action={action}
            formType={formType}
            post={post}
            />
        )
    }
}

export default EditPostForm;