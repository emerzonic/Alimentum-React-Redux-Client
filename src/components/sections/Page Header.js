import React from 'react';
import '../pages/home/home.css';
import './section.css';


const PageHeader = (props) => (
             <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto p-0">
                    <div className="rounded shadow-sm p-3 m-0 page-title-div">
                         <h1 className="display-4 page-title mb-0">{props.pageTitle}</h1>
                         {props.showBackButton?
                         <button className="btn btn-success mt-2 back-button px-md-3" 
                                 onClick={()=>props.history.goBack()}><i className="fas fa-backward mr-2"></i> Back</button>:""}
                    </div>
                    </div>
                </div>
            </div>
);

export default PageHeader;



























                    


