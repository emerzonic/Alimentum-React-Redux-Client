import React from 'react';
import './home.css';
import Img from '../../../assets';


let img = {
    backgroundImage: 'url(' + Img.headerImg.header + ')',
    backgroundRepeat:"no-repeat",
  };

const Header = (props) => (
<div className="jumbotron jumbotron-fluid shadow" style={img}>
    <div className="container">
        <div className="row">
                <div className="col-6 mx-auto">
                    {props.state.saveFeedBack? 
                        <div className="alert alert-success" role="alert">
                        <i className="fas fa-check mr-2"></i>
                            {props.state.saveFeedBack}
                        </div>:
                        props.state.unsaveFeedBack?
                        <div className="alert alert-info " role="alert">
                        <i className="fas fa-times mr-2"></i>
                            {props.state.unsaveFeedBack}
                        </div>:""
                    }
                </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h1 className="display-4 text-right">{props.state.pageTitle}</h1>
            </div>
            <div className="col-md-6">
                <form className="form-inline mt-3 w-100" onSubmit={props.onSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Recipes" aria-label="Search" 
                    onChange={props.onChange} value={props.state.name}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>
</div>
);

export default Header;