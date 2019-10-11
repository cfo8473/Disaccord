import React from "react";
import Modal from '../modal/modal';
import { Link } from 'react-router-dom'
import { AuthRoute } from '../../util/route_util'

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="current-user-block">
        <p className="username-text">{this.props.currentUser.username}</p>
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