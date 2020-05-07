import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (<>
        <div>
            <h1 className='tumblrLogo'>mumblr</h1>
            <h2 className='subHeading'>
                Come for what you love. <br/>
                Stay for what you discover.
                </h2>
            <div className="authLinks">
               
                <Link to='/login' className='login'>Login</Link>
                
                <Link to='/signup' className='signup'>Sign up!</Link>
              
            </div>
        </div>
    </>);


    return currentUser ? '' : sessionLinks();
    // return personalGreeting();
};

export default Greeting;