import React from 'react';
import {
    Component
} from 'react';
import './user.css';


class Login extends Component {
    constructor(props) {
        super(props);
    
    this.handleSubmit = e =>{
        e.preventDefault();
        let preciousUser = {
            username: e.target.username.value,
            password: e.target.password.value
        };;
        if(!preciousUser.username.length ||!preciousUser.password.length){ 
            return;
        }else{
            this.props.handleUserSignin(preciousUser);
        }
      }
}

render() {
    return (
        <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
        <form className="p-md-5 mb-5 shadow-sm border rounded">
            <h1 className="card-title">Login</h1>
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
                <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
    );
}
}
 
export default Login;