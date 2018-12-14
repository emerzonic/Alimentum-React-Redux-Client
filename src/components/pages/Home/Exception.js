import React from 'react';
import './home.css';
import Img from '../../../assets';


let img = {
    backgroundImage: 'url(' + Img.errorImg.error + ')',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  };

const Exception = () => (
        <div className="container-fluid m-0 p-0">
            <div class="card col-md-4 mx-auto bg-transparent border-0">
                <img class="card-img-top mt-5" src={Img.errorImg.error} alt="Card cap"/>
                <div class="card-body">
                    <h5 class="card-title text-danger text-center">Oops! Something is not quite right. Please try again.</h5>
                    <a href="/" class="text-center">Go Home</a>
                </div>
            </div>
        </div>
);

export default Exception;