import React from 'react';
import { Link, NavLink } from "react-router-dom";
import '../pages/home/home.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withRouter } from "react-router";


const active = {
         color:'green',
         borderBottom:'0.1rem solid green' 
}

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
                    <NavLink to="/categories" className="nav-link" exact activeStyle={active}>
                        <i className="fas fa-list-alt mr-2"></i>
                        Categories
                    </NavLink>
                    <NavLink to={"/user/favorites"} className="nav-link" exact activeStyle={active}>
                        <i className="far fa-star mr-2"></i>
                        Favorites
                    </NavLink>
                    {props.currentUser.validToken?
                    <NavLink to="/logout" className="nav-link" exact activeStyle={active}>
                        <i className="fas fa-sign-out-alt mr-2"></i>
                            Logout
                    </NavLink>
                    :""}
                    {!props.currentUser.validToken?
                        <NavLink to="/user-form/login" className="nav-link" exact activeStyle={active}>
                            <i className="fas fa-sign-in-alt mr-2"></i>
                            Login
                        </NavLink>
                    :""}
                    {!props.currentUser.validToken?
                        <NavLink to="/user-form/signup" className="nav-link" exact activeStyle={active}>
                            <i className="fas fa-user-plus mr-2"></i>
                            Sign Up
                        </NavLink>
                    :""}
                    {props.currentUser.validToken?
                        <NavLink to={"/user/favorites"} className="nav-link">
                            <i className="fas fa-user-circle mr-2"></i> 
                            {props.currentUser.user.username}
                        </NavLink>
                    :""}
                </div>
            </nav>
    </div>
);

Nav.propTypes = {
    currentUser:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    currentUser:state.currentUser
})
export default withRouter(connect(mapStateToProps,null)(Nav));