import React from 'react';
import {
    Component
} from 'react';

// import './home.css';
import UserForm from "./UserForm"
// import axios from 'axios';
import './user.css';
import { connect } from 'react-redux';
import { createUser } from "../../../actions/projectActions";
import { loginUser } from "../../../actions/projectActions";
import PropTypes from "prop-types";

class User extends Component {
    constructor(props) {
        super(props);
        this.state={
            error:"",
            userform:"",
            // user:{}
        }

        this.setUserForm = ()=>{
            let form = this.props.match.params.form;
            this.setState({
                userform:form
            })
        }

        this.handleSubmit = (user, requestType) => {
            const history = this.props.history;
            if(requestType === "signUp"){
                this.props.createUser(user, history) 
            }else{
                this.props.loginUser(user, history)
            }
        }

        
        // this.props.createNewUser = (newUser, history) => {
        //     axios.post("http://localhost:5000/api/users/signup", newUser).then(res => {
        //         console.log(res);
        //         if (res.data.type !== "failed") {
        //             // localStorage.setItem('erapp_user', res.data.username)
        //             // localStorage.setItem('erapp_id', res.data._id)
        //             // this.setState({
        //             //     user: {
        //             //         id: res.data._id,
        //             //         username: localStorage.getItem('erapp_user')
        //             //     }
        //             // })
        //             return this.props.history.push('/user-form/login');
        //         } else {
        //             this.setState({
        //                 serverResponse:res.data.text
        //             })
        //         }
        //     }).catch(err => console.log(err));
        // }

        //  this.loginUser = (User) => {
        //      axios.post("http://localhost:5000/api/users/login", User).then(res => {
        //         console.log(res);
        //         if (res.data.success) {
        //             // localStorage.setItem('erapp_user', res.data.username)
        //             // localStorage.setItem('erapp_id', res.data._id)
        //             // this.setState({
        //             //     user: {
        //             //         id: res.data._id,
        //             //         username: localStorage.getItem('erapp_user')
        //             //     }
        //             // })
        //             return this.props.history.push("/");
        //         } else {
        //             return this.props.history.push("/");
        //         }
        //     }).catch(err => console.error(err));

        // }
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
                              history={this.props.history}
                              form={this.state.userform}/> 
                </div>
        );
    }
}


User.propTypes = {
    createUser:PropTypes.func.isRequired,
    loginUser:PropTypes.func.isRequired,
    errors:PropTypes.object,
    userForm:PropTypes.string,
    // user:PropTypes.object,
}

const mapStateToProps = state =>({
    errors:state.error,
    // user:state.user,

})
export default connect(mapStateToProps, {
    createUser, loginUser
})(User);
