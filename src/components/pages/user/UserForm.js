import React from 'react';
import '../home/home.css';
import Img from '../../../assets';


let img = {
    backgroundImage: 'url(' + Img.headerImg.header + ')',
    backgroundRepeat:"no-repeat",
  };

const UserForm = (props) => (
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
                    <li className="nav-item">
                    </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                            <form className="p-md-5 mb-5 bg-dark rounded">
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
                    <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                    <form className="p-5 mb-5 bg-secondary rounded">
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
                    </div>
                </div>
        </div>
    </div>
);

export default UserForm;