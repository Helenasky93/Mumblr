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
            <div>
                
            </div>
        )
    }
}