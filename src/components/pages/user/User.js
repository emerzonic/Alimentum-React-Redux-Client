import React from 'react';
import {
    Component
} from 'react';

// import './home.css';
import UserForm from "./UserForm"
import axios from 'axios';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser:{
                password: '',
                username: ''
            },
            user:{
                password: '',
                username: ''
            },
        };

        this.handleSignUpInputChange = (e) => {
            let target = e.target;
            let value = target.value;
            let name  = target.name;
            this.setState({
                newUser:{
                    [name]:value}
            })
        }

        this.handleLoginInputChange = (e) => {
            let target = e.target;
            let value = target.value;
            let name  = target.name;
            this.setState({
                user:{
                    [name]:value}
            })
        }

        this.handleSubmit = e =>{
            e.preventDefault();
            let user = {
                // fullName: e.target.fullName.value,
                username: e.target.username.value,
                password: e.target.password.value
            };
            console.log(user);
            if(!user.password.length ||!user.password.length){ 
              return;
          }else{
            let requestType = e.target.getAttribute("request-type");
              if(requestType==="signUp"){
                this.createNewUser(user);
              }else{
                this.loginUser(user);
              }
            }
          }

        this.createNewUser = (newUser) => {
            axios.post("http://localhost:5000/user/signup", newUser).then(res => {
                console.log(res);
                // if (res.data.username) {
                //     localStorage.setItem('erapp_user', res.data.username)
                //     localStorage.setItem('erapp_id', res.data._id)
                //     this.setState({
                //         user: {
                //             id: res.data._id,
                //             username: localStorage.getItem('erapp_user')
                //         }
                //     })
                //     this.props.history.push('/search');
                // } else {
                //     this.props.history.push('/signup');
                // }
            }).catch(err => console.log(err));
        }

        this.loginUser = (User) => {
            axios.post("http://localhost:5000/login", User).then(res => {
                if (res.data.username) {
                    //             localStorage.setItem('erapp_user', res.data.username)
                    //             localStorage.setItem('erapp_id', res.data._id)
                    //             this.setState({
                    //                 user: {
                    //                     id: res.data._id,
                    //                     username: localStorage.getItem('erapp_user')
                    //                 }
                    //             })
                    //             this.props.history.push('/search');
                    //         } else {
                    //             this.props.history.push('/login');
                            }
            }).catch(err => console.log(err));

        }
        //This method handle user signout
    //     this.handleUserSignout= (action) => {
    //         if(action === "positive"){
    //         localStorage.removeItem('erapp_id');
    //         localStorage.removeItem('erapp_user');
    //         localStorage.removeItem('erapp_articles');
    //         this.props.history.push('/');
    //         }else{
    //         this.props.history.goBack();
    //         }
    //     }

    }

    render() {
console.log(this.state);
        return (
            <div>
            <UserForm onSubmit={this.handleSubmit} 
                      signUpChange={this.handleSignUpInputChange}
                      loginChange={this.handleLoginInputChange}
                      state={this.state} />
        </div>
        );
    }
}

export default User;