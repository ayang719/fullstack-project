import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => {
        return (     
            <nav className="login-signup">
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