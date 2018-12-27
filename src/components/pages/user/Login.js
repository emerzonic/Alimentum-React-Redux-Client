import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from "../../../actions/projectActions";
import PropTypes from "prop-types";

import './user.css';
class  Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
                username: '',
                password: '',
                errors:{}
            }
        
        this.handleOnChange = (e) => {
            let target = e.target;
            let value = target.value;
            let name  = target.name;
            this.setState({
                    [name]:value
            })
        }

        this.handleSubmit = e =>{
            e.preventDefault();
            let user = {
                "username": e.target.username.value,
                "password": e.target.password.value,
            };
            const history = this.props.history;
            e.target.reset();
            this.props.loginUser(user, history)
        }

        
}

componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors });
    }
    if(nextProps.currentUser.validToken){
      this.props.history.push("/categories")
    }
  }
    render() { 
        const {errors} = this.state;
        const invalidClass = "form-control is-invalid";
        const validClass = "form-control";
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 mx-auto user-form">                     
                <form className="user-forms shadow-sm border rounded" onSubmit={this.handleSubmit} request-type="login">
                <h1 className="card-title">Login</h1>
                <small className="error-text form-text text-muted">
                        {errors?errors.credentials:""}
                </small>
                        <div className="form-group">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input type="text" className={errors.username?invalidClass:validClass} id="login-username" aria-describedby="username" placeholder="Enter Username"  
                                   name="username" value={this.state.username} onChange={this.handleOnChange}/>
                            <small className="error-text form-text text-muted">
                                   {errors?errors.username:""}
                            </small>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className={errors.password?invalidClass:validClass} id="login-password"  placeholder="Enter Password" 
                                    name="password" value={this.state.password}  onChange={this.handleOnChange}/>
                            <small className="error-text form-text text-muted">
                                    {errors?errors.password:""}
                            </small>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p className="d-inline mx-2"> Don't have an account?</p>
                            <a className="d-inline user-links"  href="/user-form/signup"> Sign UP</a>
                    </form>
                </div>
                </div>
                </div>
            );
        }
}

Login.propTypes = {
    loginUser:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
    currentUser:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    errors:state.errors,
    currentUser:state.currentUser

})
export default connect(mapStateToProps, {
    loginUser
})(Login);