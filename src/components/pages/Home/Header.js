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
            <div className="col-md-4">
                <h1 className="display-4">{props.state.pageTitle}</h1>
                <p className="">{props.state.saveFeedBack}</p>
            </div>
            <div className="col-md-8">
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