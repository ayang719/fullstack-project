import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => {
        return (     
            <nav className="login-signup">
                <Link className='login-link-spl' to="/login">Log In</Link>
                 
                <Link className='signup-link-spl' to="/signup">Sign Up</Link>
            </nav>
        )
    }
    
    const personalGreeting = () => (
        <hgroup className="header-group">
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    
    
    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;