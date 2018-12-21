import React from 'react';
import '../pages/home/home.css';

const Nav = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a href="/" className="navbar-brand border-2"><i className="fas fa-utensils"></i>A</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white"><i className="fas fa-bars"></i></span>
                    <span className="text-white ml-2">Menu</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <a href="/categories" className="nav-link">Categories</a>
                    <a href="/user/favorites" className="nav-link">Favorites</a>
                    <a href="/user/login" className="nav-link justify-self-end">Login</a>
                    <a href="/user/signup" className="nav-link justify-self-end">Sign Up</a>
                    <a href="/" className="nav-link justify-self-end">Logout</a>
                </div>
            </nav>
    </div>
);

export default Nav;