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
                    <a href="/categories" className="nav-link">
                        <i className="fas fa-list-alt mr-2"></i>
                        Categories
                    </a>
                    <a href={"/user/favorites"} className="nav-link">
                        <i className="far fa-star mr-2"></i>
                        Favorites
                    </a>
                    {props.currentUser.validToken?
                    <a href="/logout" className="nav-link justify-self-end">
                        <i className="fas fa-sign-out-alt mr-2"></i>
                            Logout
                    </a>
                    :""}
                    {!props.currentUser.validToken?
                        <a href="/user-form/login" className="nav-link justify-self-end">
                            <i className="fas fa-sign-in-alt mr-2"></i>
                            Login
                        </a>
                    :""}
                    {!props.currentUser.validToken?
                        <a href="/user-form/signup" className="nav-link justify-self-end">
                            <i class="fas fa-user-plus mr-2"></i>
                            Sign Up
                        </a>
                    :""}
                    {props.currentUser.validToken?
                        <a href="/" className="nav-link justify-self-end">
                            <i className="fas fa-user-circle mr-2"></i> 
                            {props.currentUser.user.username}
                        </a>
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