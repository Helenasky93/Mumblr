import React from 'react';
import Post from '../post/post_container';

class UserShowPage extends React.Component {

    constructor(props) {
        super(props);
        
        
        
        
    }

    componentDidMount() {
        this.props.allUsers();
        this.props.fetchAllPosts();
    }

    render() {
        // console.log(this.props.posts)
        // console.log(this.props)
        let user;
        let posts;
        let showPosts;

        if (this.props.users.allUsers && this.props.posts.length) {

        
            user = this.props.users.allUsers[parseInt(this.props.match.params.id)];
            posts = Object.values(this.props.posts).filter(value => {
                // console.log(value, user)
                return value.author_id === user.id
            });
            showPosts = posts.map((post, idx) => {
                return(
                    <div key={idx}>
                        <Post key={idx} post={post}/>
                        <br/>
                    </div>
                )
            });
            // console.log(user, posts)
        }
        // console.log(user, 'UUSSEERR')

        function profilePicture  ()  {
            if (user && user.profile_picture_url) {
                return (
                <img height='150' width='150' src={user.profile_picture_url} alt="profile pic" />
            )}
        };
            

    
        
        return(
            <div>
                <hgroup>
                    <button onClick={this.props.logout}>Logout</button>
                    <br/>
                    {this.props.navLink}
                </hgroup>
                
                <div>
                    {profilePicture()}
                </div>
                <div>
                    {showPosts}
                </div>
                
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
