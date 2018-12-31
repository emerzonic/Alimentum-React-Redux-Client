
    import React from 'react';
    import {
        Component
    } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { logoutUser } from "../../../actions/securityActions";
import PropTypes from "prop-types";
import "./user.css";
     
    const customStyles = {
      content : {
        top         : '50%',
        left        : '50%',
        right       : 'auto',
        bottom      : 'auto',
        marginRight : '-50%',
        transform   : 'translate(-50%, -50%)',
        padding     : '5% 10%',
        color       :'red',
        border      : '0.2rem solid green',
      }
    };
 
    Modal.setAppElement('body')
     
    class Logout extends Component  {
      constructor(props) {
        super(props);
        this.state = {
          modalIsOpen: false
        };
      }
     
      openModal=()=>{
        this.setState({modalIsOpen: true});
      }
          
      closeModal=(e)=>{
        let action = e.target.getAttribute('data-id')
        if(action === "positive"){
          this.props.logoutUser(this.props.history);
        }else{
          this.props.history.goBack();
        }
        this.setState({modalIsOpen: false});
      }

      componentDidMount() {
        this.openModal()
      }
     
      render() {
        return (
          <div className="logout-div">
              <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal} style={customStyles}>
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h5 className="card-title confirm-text text-danger"> 
                          <i className="fas fa-exclamation mr-2"></i>
                          Please Confirm
                      </h5>
                      <hr/>
                      <p className="card-text warning-text">Are you sure you want to sign out?</p>
                      <div className="actions text-center">
                          <button data-id="deny" className="btn btn-success"  onClick={this.closeModal}>
                          <i className="fas fa-undo mr-1"></i>Return
                          </button>
                          <button data-id="positive" className="btn btn-warning mx-2" onClick={this.closeModal}>
                            Click to Signout
                          </button>
                      </div>    
                    </div>
                  </div>
              </Modal>
          </div>
        );
      }
    }

 

    Logout.propTypes = {
      logoutUser:PropTypes.func.isRequired,
  }
  
  export default connect(null, {
      logoutUser
  })(Logout);




