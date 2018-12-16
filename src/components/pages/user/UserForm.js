import React from 'react';
import '../home/home.css';
import Header from "../../sections/Header";
import Login from "./Login";
import SignUp from "./SignUp";

const UserForm = (props) => (
<div>
    <Header {...props}/>
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12 mx-auto">
                <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
                    <li className="nav-item w-50">
                        <a className="nav-link active text-center" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                    </li>
                    <li className="nav-item w-50">
                        <a className="nav-link text-center" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a>
                    </li>
                </ul>
                    <div className="tab-content" id="myTabContent">
                        <Login {...props}/>
                        <SignUp {...props}/>
                    </div>
                </div>
        </div>
    </div>
</div>
);

export default UserForm;