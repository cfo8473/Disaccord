import React from "react";
import Modal from '../modal/modal';
import { Link } from 'react-router-dom'
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/sign_up_container'
import { AuthRoute } from '../../util/route_util'

class Greeting extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
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

      if (!this.props.currentUser) {
        return (
          <div>
            <header className="main-header">
              <nav className="header-inner">
                <div className="header-logo">
                  T[logoplaceholder]
              </div>
                <ul className="header-nav-center">
                  DISACCORD TEST [ DOWNLOAD, BLAH BLAH, TEST2, TEST3, TEST4, TEST 5 ]
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