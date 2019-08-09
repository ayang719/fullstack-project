import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar_container';

const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => {
        return (
            <div className='full-nav-bar'>
                <div className='navbar-container'>
                    <div className='navbar-content'>
                        <a className='kelp-logo' href="/">
                            <img className='logo-text' src="../../coollogo_com-31684455.png" />
                            <img className='logo-image' src="https://divineeventslv.com/wp-content/uploads/2018/04/yelp-logo-27.png" />
                        </a>
                        <SearchBar/>
                        <nav className="login-signup-nav">
                            <Link className='login-nav' to="/login">Log In</Link>
                            <Link className='signup-nav' to="/signup">Sign up</Link>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }

    const personalGreeting = () => (
        <div className='navbar-container'>
            <div className='navbar-content'>
                <a className='kelp-logo' href="/">
                    <img className='logo-text' src="../../coollogo_com-31684455.png" />
                    <img className='logo-image' src="https://divineeventslv.com/wp-content/uploads/2018/04/yelp-logo-27.png" />
                </a>
                <SearchBar/>
                <hgroup className="logout-container">
                    <button className="logout-button" onClick={logout}>Log Out</button>
                </hgroup>
            </div>
        </div>
    );


    return currentUser ? personalGreeting() : sessionLinks();
};

export default NavBar