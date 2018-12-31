import React from 'react';
import '../pages/home/home.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


const Modal = (props) => (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" 
         aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{props.isModalContentSet?props.recipeTitle:""}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" data-modal="false" onClick={props.setModalContent}>&times;</span>
          </button>
        </div>
        <div className="modal-body">
            <iframe id="videoIframe" src={props.isModalContentSet?props.videoUrl:""} 
                    className="embed-responsive-item" width="100%" height="400" 
                    title="youtube" frameBorder="0" allowFullScreen>
            </iframe>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success" data-dismiss="modal" 
          data-modal="false" onClick={props.setModalContent}>Close</button>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  isModalContentSet:PropTypes.bool,
  videoUrl:PropTypes.string,
  recipeTitle:PropTypes.string
}

const mapStateToProps = state =>({
  isModalContentSet:state.recipe.isModalContentSet,
  videoUrl:state.recipe.recipe.strYoutube,
  recipeTitle:state.recipe.recipe.strMeal
})

export default connect(mapStateToProps,
  null)(Modal);