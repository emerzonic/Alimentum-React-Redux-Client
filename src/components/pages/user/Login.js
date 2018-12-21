import React from 'react';
import { Component } from 'react';

import './user.css';
class  Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
                username: '',
                password: '',
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
                username: e.target.username.value,
                password: e.target.password.value
            };
            let usernameError = user.username.length ? false : true;
            let passwordError = user.password.length ? false : true;
            if(usernameError || passwordError){ 
                this.setState({
                        usernameError:usernameError,
                        passwordError:passwordError
                })
              return;
            }else{
            let requestType = e.target.getAttribute("request-type");
            e.target.reset();
            this.props.onSubmit(user, requestType);
            }
        }
}
    render() { 
        return (<div className={this.props.form==="login"?"tab-pane fade show active":"tab-pane fade"} id="login" role="tabpanel" aria-labelledby="login-tab">
                    <form className="p-md-5 mb-5 shadow-sm border rounded-bottom" onSubmit={this.handleSubmit} request-type="login">
                        <h1 className="card-title">Login</h1>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="login-username" aria-describedby="username" placeholder="Enter Username"  
                                   name="username" value={this.state.username} onChange={this.handleOnChange}/>
                            <small id="usernameError" className="form-text text-muted text-danger">
                                   {this.state.usernameError?"Username cannot be empty!":" "}
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="login-password"  placeholder="Enter Password" 
                                    name="password" value={this.state.password}  onChange={this.handleOnChange}/>
                            <small id="usernameError" className="form-text text-muted text-danger">
                                   {this.state.passwordError?"Password cannot be empty!":" "}
                            </small>
                        </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            );
        }
}

export default Login;