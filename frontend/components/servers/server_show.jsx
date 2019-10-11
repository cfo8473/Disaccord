import React from "react";
import Modal from '../modal/modal';
import { Link } from 'react-router-dom'
import { AuthRoute } from '../../util/route_util'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="current-user-block">
        <div className="username-icon"><FontAwesomeIcon icon={faAddressCard} /></div>

        <div className="username-box">
          <div className="username-text">{this.props.currentUser.username}</div>

          <div className="username-id">#{this.props.currentUser.id}</div>
        </div>

        {this.props.openModal}
      </div>) : (
        <header className="main-header">
          <nav className="header-inner">
            <ul className="header-nav-right">
              testf
           </ul>
          </nav>
        </header>
      )

      return (
        <div>
          {display}
        </div>
      );
    }
}

export default ServerShow;