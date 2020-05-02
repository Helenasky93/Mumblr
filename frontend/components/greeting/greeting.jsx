import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (<>
        <div>
            <h1 className='tumblrLogo'>tumblr</h1>
            <h2 className='subHeading'>
                Come for what you love. <br/>
                Stay for what you discover.
                </h2>
            <div className="authLinks">
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/signup'>Sign up!</Link>
            </div>
        </div>
    </>);

    const personalGreeting = () => {
        return (
        <hgroup>
            <h2>Hi, {(currentUser.username)}!</h2>
            <button onClick={logout}>Log Out</button>
        </hgroup>
        );
    };
    console.log(currentUser);

    return currentUser ? personalGreeting() : sessionLinks();
    // return personalGreeting();
};

export default Greeting;