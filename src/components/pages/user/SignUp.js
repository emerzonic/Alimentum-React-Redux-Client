import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from "../../../actions/securityActions";
import PropTypes from "prop-types";
import store from "../../../store";


import './user.css';
class  SignUP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
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
                "confirmPassword": e.target.confirmPassword.value
            };
            e.target.reset();
            let history = this.props.history;
            this.props.createUser(user, history) 
        }   
}

componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors });
    }
  }
  componentWillMount(){
    if(store.getState().currentUser.validToken){
        this.props.history.goBack()
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
                <form className="user-forms shadow-sm border rounded" onSubmit={this.handleSubmit} request-type="signUp">
                        {this.props.serverResponse? 
                            <div className="alert alert-danger" role="alert">
                            <i className="fas fa-exclamation-triangle"></i>
                                {this.props.serverResponse}
                            </div>:""
                        }   
                        <h1 className="card-title">Sign Up</h1>
                        <div className="form-group">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input type="text" className={errors.username?invalidClass:validClass} id="signup-username" aria-describedby="username" placeholder="Enter Username"  
                                name="username" value={this.state.username} onChange={this.handleOnChange}/>
                            <small className="error-text form-text text-muted">
                                {errors?errors.username:""}
                            </small>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className={errors.password?invalidClass:validClass} id="signup-password"  placeholder="Enter Password" 
                                    name="password" value={this.state.password}  onChange={this.handleOnChange}/>
                            <small className="error-text form-text text-muted">
                            {errors?errors.password:""}
                            </small>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className={errors.confirmPassword?invalidClass:validClass} id="confirmPassword-password"  placeholder="Enter Password Confirmation" 
                                    name="confirmPassword" value={this.state.confirmPassword}  onChange={this.handleOnChange}/>
                            <small className="error-text form-text text-muted">
                            {errors? errors.confirmPassword:""}
                            </small>
                        </div>
            
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p className="d-inline mx-2 inquiry-text"> Already have an account?</p>
                            <a className="d-inline user-links" href="/user-form/login"> Login</a>
                    </form>
                </div>
                </div>
                </div>
            );
        }
    }

    SignUP.propTypes = {
        createUser:PropTypes.func.isRequired,
        errors:PropTypes.object.isRequired,
    }
    
    const mapStateToProps = state =>({
        errors:state.errors,    
    })
    export default connect(mapStateToProps, {
        createUser
    })(SignUP);