import React from "react";
import { Link } from 'react-router-dom';

const UsersSidebar = props => {
   
    let users
    let showUsers
   
    if (props.allUsers && props.allUsers.allUsers) {

        users = Object.values(props.allUsers.allUsers);
        

        showUsers = users.map((user, idx) => {
            return(
                <div>
                    <br/>
                    <br/>
                <Link to={`/users/${user.id}`} key={idx} className='sidebarLink'>{user.username}
                <br/>
                <br/>
               
                
                <img height="100" width='100' id={idx} src={user.profile_picture_url || window.default_avatar} className="profile-picture"  alt="profile_pic"/>
                </Link>
                <br/>
                </div>
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