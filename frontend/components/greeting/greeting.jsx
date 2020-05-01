import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (<>
        <nav>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/signup'>Sign up!</Link>
        </nav>
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