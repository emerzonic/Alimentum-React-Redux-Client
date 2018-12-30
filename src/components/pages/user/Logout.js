
    import React from 'react';
    import {
        Component
    } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { logoutUser } from "../../../actions/securityActions";
import PropTypes from "prop-types";
     
    const customStyles = {
      content : {
        top         : '50%',
        left        : '50%',
        right       : 'auto',
        bottom      : 'auto',
        marginRight : '-50%',
        transform   : 'translate(-50%, -50%)',
        padding     : '5% 10%',
        color       :'red'
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
                onRequestClose={this.closeModal} style={customStyles}
            >
              <h2 ref={subtitle => this.subtitle = subtitle}>Please Confirm</h2>
              <div>
                  <div className="image content">
                      <div className="description">
                        <div className="ui header">Are you sure you want to sign out?</div>
                      </div>
                  </div>
                  <div className="actions">
                    <div data-id="deny" className="btn btn-primary"  onClick={this.closeModal}>
                      Return
                    </div>
                    <div data-id="positive" className="btn btn-warning mx-2" onClick={this.closeModal}>
                        Click to Signout
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


