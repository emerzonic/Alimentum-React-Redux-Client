import React from 'react';
import './home.css';

const Nav = () => (
    <div>
         <nav className="navbar navbar-light bg-dark">
            <div className="container d-flex justify-content-center flex-column flex-md-row">
                <a href="/" className="navbar-brand">A</a>
                <a href="/" className="nav-link">Favorites</a>
                <a href="/" className="nav-link">Login</a>
                <a href="/" className="nav-link">Sign Up</a>
                <a href="/" className="nav-link">Logout</a>
            </div>
        </nav>
    </div>
);

export default Nav;