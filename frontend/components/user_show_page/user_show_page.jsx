import React from 'react';

class UserShowPage extends React.Component {

    constructor(props) {
        super(props);
        
        
        
        
    }

    componentDidMount() {
        this.props.allUsers();
        this.props.fetchAllPosts();
    }

    render() {
        console.log(this.props.posts)
        console.log(this.props)
        let user;
        let posts;
        if (this.props.users.allUsers && this.props.posts.length) {

        
            user = this.props.users.allUsers[parseInt(this.props.match.params.id)];
            posts = Object.values(this.props.posts).filter(value => {
                console.log(value, user)
                return value.author_id === user.id
            })
            console.log(user, posts)
        }

    
        
        return(
            <div>
                <hgroup>
                    <button onClick={this.props.logout}>Logout</button>
                    <br/>
                    {this.props.navLink}
                </hgroup>
        WAP { this.props.match.params.id }
            </div >
        )
    }
}

// export default function(props) {
//     return(
//         <div>
//             WAP {props.match.params.id}
//         </div>
//     )
// };

export default UserShowPage;
