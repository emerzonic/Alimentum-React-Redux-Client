import React from 'react';
import {
    Component
} from 'react';

// import './home.css';


class SignUP extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    
        this.handleSubmit = e =>{
            e.preventDefault();
            let newUser = {
                fullName: e.target.fullName.value,
                username: e.target.username.value,
                password: e.target.password.value
            };
            if(!newUser.fullName.length ||!newUser.password.length ||!newUser.password.length){ 
              return;
          }else{
              this.props.handleUserSignup(newUser);
          }
          }
    }
    render() {
        return (
            <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
            <form className="p-5 mb-5 shadow-sm border rounded">
                <h1 className="card-title">Sign Up</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
                     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
            </form> 
        </div>

        );
    }
}

export default SignUP;