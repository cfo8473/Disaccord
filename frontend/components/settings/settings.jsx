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
    return (
      <div className="modal-settings">

          <p className="settings-exit" onClick={this.props.closeModal}>X</p>
          <nav className="menu-bar">
            
          <Link className="settings-logout" to="/" onClick={this.logoutModal}>Log Out</Link>
          </nav>

      </div>
    )
  }
}

export default Settings;