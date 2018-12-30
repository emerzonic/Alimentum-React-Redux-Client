import React from 'react';
import Img from '../../../assets';
import './error.css';


let img = {
    backgroundImage: 'url(' + Img.errorImg.error + ')',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  };

const Exception = () => (
        <div className="container m-0 p-0 error-div">
            <div className="card col-md-4 mx-auto bg-transparent border-0">
                <img className="card-img-top mt-5" src={Img.errorImg.error} alt="Card cap"/>
                <div className="card-body">
                    <a href="/" className="error-page-link text-center">Go Home</a>
                </div>
            </div>
            <p className="card-title error-text mb-5 pb-5"><i className="fas fa-exclamation-triangle"></i> Oops! Something is not quite right. Please try again.</p>
        </div>
);

export default Exception;