import React from 'react';
import { Component } from 'react';

import './user.css';
class  SignUP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            usernameError:false,
            passwordError:false
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
            this.setState({ usernameError:false, passwordError:false })
            e.preventDefault();
            let user = {
                "username": e.target.username.value,
                "password": e.target.password.value,
                "confirmPassword": e.target.confirmPassword.value
            };
            e.target.reset();
        //     let usernameError = user.username.length ? false : true;
        //     let passwordError = user.password.length ? false : true;
        //     if(usernameError||passwordError){ 
        //         this.setState({
        //                 usernameError:usernameError,
        //                 passwordError:passwordError
        //         })
        //       return;
        //   }else{
            let requestType = e.target.getAttribute("request-type");
            this.props.onSubmit(user, requestType);
            // }
          }
}
    render() { 
        console.log(this.state)
        return (
                <div className={this.props.form==="signup"?"tab-pane fade show active":"tab-pane fade"} id="signup" role="tabpanel" aria-labelledby="signup-tab">
                        <form className="user-forms shadow-sm border rounded-bottom" onSubmit={this.handleSubmit} request-type="signUp">
                        {this.props.serverResponse? 
                            <div className="alert alert-danger" role="alert">
                            <i className="fas fa-exclamation-triangle"></i>
                                {this.props.serverResponse}
                            </div>:""
                        }   
                        <h1 className="card-title">Sign Up</h1>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="signup-username" aria-describedby="username" placeholder="Enter Username"  
                                name="username" value={this.state.username} onChange={this.handleOnChange}/>
                            <small id="usernameError" className="form-text text-muted">
                                {this.state.usernameError?"Username cannot be empty!":" "}
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="signup-password"  placeholder="Enter Password" 
                                    name="password" value={this.state.password}  onChange={this.handleOnChange}/>
                            <small id="usernameError" className="form-text text-muted">
                                {this.state.passwordError?"Password cannot be empty!":" "}
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword-password"  placeholder="Enter Password Confirmation" 
                                    name="confirmPassword" value={this.state.ConfirmPassword}  onChange={this.handleOnChange}/>
                            <small id="usernameError" className="form-text text-muted">
                                {this.state.passwordError?"Password cannot be empty!":" "}
                            </small>
                        </div>
            
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            );
        }
    }

export default SignUP;