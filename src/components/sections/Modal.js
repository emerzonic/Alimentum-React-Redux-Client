import React from 'react';
import '../pages/home/home.css';


const Modal = (props) => (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" 
         aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{props.recipe.strMeal}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
            <iframe id="videoIframe" src={props.recipe.strYoutube} 
                    className="embed-responsive-item" width="100%" height="400" 
                    title="youtube" frameBorder="0" allowFullScreen>
            </iframe>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;