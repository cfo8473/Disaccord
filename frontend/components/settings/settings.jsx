import React from 'react';
import { Link } from 'react-router-dom';

class Settings extends React.Component {
  constructor(props){
    super(props);
    this.logoutModal = this.logoutModal.bind(this);
  }

  logoutModal(e) {
    this.props.logout();
    this.props.closeModal();
  }

  render () {
// debugger
    return (
      <div className="modal-settings">

          
        <nav className="menu-bar">
          
          <Link className="settings-logout" to="/" onClick={this.logoutModal}>Log Out</Link>
        </nav>

        <div className="modal-settings-user-info">
          <div className="modal-settings-user-info-text">
            
            <h5 className="login-text">USERNAME</h5>
            <h6 className="settings-info-text">{this.props.username}#{this.props.id}</h6>

            <h5 className="login-text">EMAIL</h5>
            <h6 className="settings-info-text">{this.props.email} </h6>
          </div>
        </div>

         <p className="settings-exit" onClick={this.props.closeModal}>X</p>

      </div>
    )
  }
}

export default Settings;