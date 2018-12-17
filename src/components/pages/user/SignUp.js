import React from 'react';
import './user.css';

const SignUP = (props) => (
    <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
            <form className="p-md-5 mb-5 shadow-sm border rounded" onSubmit={props.onSubmit} request-type="signUp">
            <h1 className="card-title">Sign Up</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="signup-username" aria-describedby="username" placeholder="Enter Username"  
                    name="username" value={props.state.newUser.username}  onChange={props.signUpChange}/>
                <small id="usernameError" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="signup-password"  placeholder="Enter Password" 
                        name="password" value={props.state.newUser.password} onChange={props.signUpChange}/>
                <small id="passwordError" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
</div>
);

export default SignUP;