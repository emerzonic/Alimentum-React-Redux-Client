import React from 'react';
import {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    setRedirectMessage
} from "../../../actions/alertsActions";
import {
    loginUser
} from "../../../actions/securityActions";
import PropTypes from "prop-types";
import store from "../../../store";
import './user.css';
const invalidClass = "form-control is-invalid";
const validClass = "form-control";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleOnChange = (e) => {
            let target = e.target;
            let value = target.value;
            let name = target.name;
            this.setState({
                [name]: value
            })
        }

        this.handleSubmit = e => {
            e.preventDefault();
            let user = this.state;
            const history = this.props.history;
            this.props.loginUser(user, history)
        }
    }

    componentWillUnmount() {
        this.props.setRedirectMessage(false, "");
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        if (nextProps.currentUser.validToken) {
            this.props.history.push("/categories")
        }
    }

    componentWillMount() {
        if (store.getState().currentUser.validToken) {
            this.props.history.push("/")
        }
    }
    render() { 
        const {errors} = this.props;
        const {welcomeMessage} = this.props;
        const {loginRedirectMessage} = this.props;
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 mx-auto user-form">                     
                <form className="user-forms shadow-sm border rounded" onSubmit={this.handleSubmit} request-type="login">
                <h1 className="card-title">Login</h1>
                <small className="error-text form-text text-muted">
                        {errors?errors.credentials:""}
                </small>
                        {welcomeMessage.text || loginRedirectMessage.text? 
                            <div className="alert login-message alert-info save-feedback mx-md-0 px-md-2" role="alert">
                            <i className="fas fa-info-circle mr-1"></i>
                                    {welcomeMessage.text|| loginRedirectMessage.text}
                            </div>:""
                        }
                        <div className="form-group">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input type="text" className={errors.username?invalidClass:validClass} id="login-username" aria-describedby="username" placeholder="Enter Username"  
                                   name="username" value={this.state.username} onChange={this.handleOnChange}/>
                            <small className="error-text form-text text-muted">
                                   {errors?errors.username:""}
                            </small>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className={errors.password?invalidClass:validClass} id="login-password"  placeholder="Enter Password" 
                                    name="password" value={this.state.password}  onChange={this.handleOnChange}/>
                            <small className="error-text form-text text-muted">
                                    {errors?errors.password:""}
                            </small>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p className="d-inline mx-2 inquiry-text"> Don't have an account?</p>
                            <a className="d-inline user-links"  href="/user-form/signup"> Sign UP</a>
                    </form>
                </div>
                </div>
                </div>
            );
        }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    setRedirectMessage: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    welcomeMessage: PropTypes.object,
    loginRedirectMessage: PropTypes.object
}

const mapStateToProps = state => ({
    errors: state.errors,
    currentUser: state.currentUser,
    welcomeMessage: state.alerts.welcomeMessage,
    loginRedirectMessage: state.alerts.redirectMessage

})
export default connect(mapStateToProps, {
    loginUser,
    setRedirectMessage
})(Login);