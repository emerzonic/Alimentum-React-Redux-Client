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
                    <span className="navbar-toggler-icon"></span>
                    <span className="">Menu</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/categories" className="nav-link">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a href="/user/favorites" className="nav-link">Favorites</a>
                        </li>
                        <li className="nav-item dropdown  justify-self-end">
                            <div className="d-flex flex-column flex-md-row justify-content-end" aria-labelledby="navbarDropdownMenuLink">
                                <a href="/user/login" className="nav-link">Login</a>
                                <a href="/user/login" className="nav-link">Sign Up</a>
                                <a href="/" className="nav-link">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
);

export default Nav;