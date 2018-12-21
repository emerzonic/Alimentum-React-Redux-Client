import React from 'react';
import {
    Component
} from 'react';

// import './home.css';
import UserForm from "./UserForm"
import axios from 'axios';
import './user.css';


class User extends Component {
    constructor(props) {
        super(props);
        this.state={
            serverResponse:"",
            userform:""
        }

        this.setUserForm = ()=>{
            let form = this.props.match.params.form;
            this.setState({
                userform:form
            })
        }

        this.handleSubmit = (user, requestType) => {
            console.log(user)
            requestType === "signUp" ? this.createNewUser(user) : this.loginUser(user);
        }


        this.createNewUser = (newUser) => {
            axios.post("http://localhost:5000/api/users/signup", newUser).then(res => {
                console.log(res);
                if (res.data.type !== "failed") {
                    // localStorage.setItem('erapp_user', res.data.username)
                    // localStorage.setItem('erapp_id', res.data._id)
                    // this.setState({
                    //     user: {
                    //         id: res.data._id,
                    //         username: localStorage.getItem('erapp_user')
                    //     }
                    // })
                    return this.props.history.push('/users/login');
                } else {
                    this.setState({
                        serverResponse:res.data.text
                    })
                }
            }).catch(err => console.log(err));
        }

        this.loginUser = (User) => {
            axios.post("http://localhost:5000/api/users/login", User).then(res => {
                console.log(res);
                if (res.data.success) {
                    // localStorage.setItem('erapp_user', res.data.username)
                    // localStorage.setItem('erapp_id', res.data._id)
                    // this.setState({
                    //     user: {
                    //         id: res.data._id,
                    //         username: localStorage.getItem('erapp_user')
                    //     }
                    // })
                    return this.props.history.push("/");
                } else {
                    return this.props.history.push("/");
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

    componentDidMount(){
        this.setUserForm();
    }


    render() {
        return ( <div>
                    <UserForm onSubmit = {this.handleSubmit} 
                              serverResponse={this.state.serverResponse}
                              form={this.state.userform}/> 
                </div>
        );
    }
}

export default User;