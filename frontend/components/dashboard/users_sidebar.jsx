import React from "react";
import { Link } from 'react-router-dom';

const UsersSidebar = props => {
    // debugger
    // let users = props.
    // let showUsers = 
    let users
    let showUsers
   
    if (props.allUsers && props.allUsers.allUsers) {

        users = Object.values(props.allUsers.allUsers);
        console.log(users, "ALL USERS")

        showUsers = users.map((user, idx) => {
            return(
                <Link to={`/users/${user.id}`} className='login'>{user.username}
                
                <img height="100" width='100' id={idx} src={user.profile_picture_url} alt="profile_pic"/>
                </Link>
            );
        });
    };
   return (
       
    <div className="sidebar">
        {showUsers}
    </div>
   
       

   );
 
}



export default UsersSidebar