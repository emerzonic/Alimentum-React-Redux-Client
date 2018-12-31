import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "./detail.css"

const Alert = (props) => (
    <div>
        {props.saveFeedBack && props.saveFeedBack.type === "success"? 
            <div className="alert alert-success mb-0" role="alert">
            <i className="fas fa-check mr-2"></i>
                {props.saveFeedBack.text}
            </div>:""
        } {props.saveFeedBack && props.saveFeedBack.type === "fail"? 
            <div className="alert alert-danger mb-0" role="alert">
            <i className="fas fa-times mr-2"></i>
                {props.saveFeedBack.text}
            </div>:""
        } {props.deleteFeedBack.text && props.deleteFeedBack.type === "success"? 
            <div className="alert alert-success mb-0" role="alert">
            <i className="fas fa-check mr-2"></i>
                {props.deleteFeedBack.text}
            </div>:""
        }
    </div> 
);

Alert.propTypes = {
    saveFeedBack:PropTypes.object.isRequired,
    deleteFeedBack:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    saveFeedBack:state.alerts.saveMessage,
    deleteFeedBack:state.alerts.deleteMessage,
    errors:state.errors
})
 
export default connect(mapStateToProps, null)(Alert);