import React from 'react';
import '../pages/home/home.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


const Nav = (props) => (
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
                    <a href={"/user/favorites"} className="nav-link">Favorites</a>
                    {props.currentUser.validToken?
                    <a href="/logout" className="nav-link justify-self-end">Logout</a>
                    :""}
                    {!props.currentUser.validToken?
                        <a href="/user-form/login" className="nav-link justify-self-end">Login</a>
                    :""}
                    {!props.currentUser.validToken?
                        <a href="/user-form/signup" className="nav-link justify-self-end">Sign Up</a>
                    :""}
                    {props.currentUser.validToken?
                        <a href="/" className="nav-link justify-self-end"><i className="fas fa-user-circle"></i> {props.currentUser.user.username}</a>
                    :""}
                
                   
                </div>
            </nav>
    </div>
);

Nav.propTypes = {
    currentUser:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    currentUser:state.currentUser
})
export default connect(mapStateToProps,null)(Nav);