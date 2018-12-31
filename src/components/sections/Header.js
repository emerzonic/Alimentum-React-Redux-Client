import React from 'react';
import store from "../../store";
import {
    Component
} from 'react';
import{RESET_ERRORS}from "../../actions/types"
import Img from '../../assets';
import {
    getRecipeBySearchTerm
} from "../../actions/recipeActions";
import {
    resetErrors
} from "../../actions/exceptionAction";
import PropTypes from "prop-types";
import {
    connect
} from 'react-redux';
import '../pages/home/home.css';
import './section.css';

let img = {
    backgroundImage: 'url(' + Img.headerImg.header + ')',
    backgroundRepeat: "no-repeat",
};
const invalidClass = "form-control is-invalid";
const validClass = "form-control";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }

        this.onChange = (e) => {
            this.setState({
                name: e.target.value
            })
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            let history = this.props.history;
            let search = {
                "searchTerm": this.state.name
            };
            this.props.getRecipeBySearchTerm(search, history)
        };
    }
    componentWillUnmount() {
        store.dispatch({type:RESET_ERRORS, payload:{}});
    }
    render() { 
        const{errors}=this.props
        return (
            <div className="jumbotron jumbotron-fluid shadow header mb-1" style={img}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pl-md-0">
                            <small className="header-error-text">
                                {errors?errors.searchTerm:""}
                            </small> 
                            <form className="form-inline mt-3 w-100" onSubmit={this.onSubmit}>
                                <div className="input-group col-md-6 mb-3 pl-md-0">
                                    <input type="text" className={errors.searchTerm?invalidClass:validClass} 
                                           placeholder="Search Recipes..." aria-label="Recipient's username" 
                                           aria-describedby="button-addon2"  
                                           onChange={this.onChange} value={this.state.name}/>
                                    <div className="input-group-append">
                                         <button className="btn btn-success" type="submit" id="button-addon2">
                                            <i className="fas fa-search"></i> Search</button>
                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

Header.propTypes = {
    getRecipeBySearchTerm: PropTypes.func.isRequired,
    resetErrors: PropTypes.func.isRequired,
    errors: PropTypes.object
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {
    getRecipeBySearchTerm,
    resetErrors
})(Header);