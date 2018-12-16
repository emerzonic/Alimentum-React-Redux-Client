import React from 'react';
import '../pages/home/home.css';
import './section.css';


const PageHeader = (props) => (
             <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto p-0">
                         <h1 className="display-4 page-title rounded shadow-sm p-3 m-0">{props.state.pageTitle}
                            {props.state.saveFeedBack? 
                                <div className="alert alert-success save-feedback d-md-inline ml-md-5" role="alert">
                                <i className="fas fa-check mr-2"></i>
                                    {props.state.saveFeedBack}
                                </div>:
                                props.state.unsaveFeedBack?
                                <div className="alert alert-info save-feedback d-md-inline ml-md-5" role="alert">
                                <i className="fas fa-times mr-2"></i>
                                    {props.state.unsaveFeedBack}
                                </div>:""
                            }                         
                         </h1>
                    </div>
                </div>
                <div className="row">
                        
                </div>
            </div>
);

export default PageHeader;



























                    


