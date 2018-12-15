import React from 'react';
import Img from '../../assets';
import '../pages/home/home.css';

const Loading = () => (
                <div className="col-md-6 mx-auto">
                    <div className="card bg-transparent border-0">
                        <img className="card-img" src={Img.loadingImg.isloading} alt="Card"/>
                    </div>
                </div>
);

export default Loading;