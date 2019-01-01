import React from 'react';
import { Link } from "react-router-dom";
import '../pages/home/home.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


const Nav = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link to="/" className="navbar-brand border-2"><i className="fas fa-utensils"></i>A</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white"><i className="fas fa-bars"></i></span>
                    <span className="text-white ml-2">Menu</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <Link to="/categories" className="nav-link">
                        <i className="fas fa-list-alt mr-2"></i>
                        Categories
                    </Link>
                    <Link to={"/user/favorites"} className="nav-link">
                        <i className="far fa-star mr-2"></i>
                        Favorites
                    </Link>
                    {props.currentUser.validToken?
                    <Link to="/logout" className="nav-link justify-self-end">
                        <i className="fas fa-sign-out-alt mr-2"></i>
                            Logout
                    </Link>
                    :""}
                    {!props.currentUser.validToken?
                        <Link to="/user-form/login" className="nav-link justify-self-end">
                            <i className="fas fa-sign-in-alt mr-2"></i>
                            Login
                        </Link>
                    :""}
                    {!props.currentUser.validToken?
                        <Link to="/user-form/signup" className="nav-link justify-self-end">
                            <i className="fas fa-user-plus mr-2"></i>
                            Sign Up
                        </Link>
                    :""}
                    {props.currentUser.validToken?
                        <Link to="/" className="nav-link justify-self-end">
                            <i className="fas fa-user-circle mr-2"></i> 
                            {props.currentUser.user.username}
                        </Link>
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