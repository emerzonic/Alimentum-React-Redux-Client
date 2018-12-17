import React from 'react';
import './user.css';

const Login = (props) => (
    <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
        <form className="p-md-5 mb-5 shadow-sm border rounded" onSubmit={props.onSubmit} request-type="login">
            <h1 className="card-title">Login</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="login-username" aria-describedby="username" placeholder="Enter Username"  
                       name="username" value={props.state.user.username} onChange={props.loginChange}/>
                <small id="usernameError" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="login-password"  placeholder="Enter Password" 
                        name="password" value={props.state.user.password}  onChange={props.loginChange}/>
                <small id="passwordError" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
                <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
);

export default Login;