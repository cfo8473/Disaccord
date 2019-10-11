import React from "react";
import Modal from '../modal/modal';
import { Link } from 'react-router-dom'
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/sign_up_container'
import { AuthRoute } from '../../util/route_util'
import { faDog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Greeting extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      const display = this.props.currentUser ? (
        <div className="current-user-block">
          <div className="username-icon"><FontAwesomeIcon icon={faAddressCard} /></div>
          
          <div className="username-box">
            <div className="username-text">{this.props.currentUser.username}</div>

            <div className="username-id">#{this.props.currentUser.id}</div>
          </div>

        </div>) : (
          <header className="main-header">
            <nav className="header-inner">
              <ul className="header-nav-right">
                testf
           </ul>
            </nav>
          </header>
        )

      if (!this.props.currentUser) {
        return (
          <div>
            <header className="main-header">
              <nav className="header-inner">
                <div className="header-logo">
                  <FontAwesomeIcon icon={faDog} /> Disaccord
              </div>
                <ul className="header-nav-center">
                  [ placeholder ]
              </ul>

                <ul className="header-nav-right">
                  <Link className="login-button" to="/login">Log In</Link>
                </ul>
              </nav>
            </header>
            
          </div>
        )
      }
    else {
      return (
        <div>
          {display}
        </div>
      );
    }
};
}

export default Greeting;