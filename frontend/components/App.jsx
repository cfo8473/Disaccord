import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Link} from 'react-router-dom'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'
import { AuthRoute } from '../util/route_util'

export default () => (
  <div>
    <header className="main-header">
      <nav className="header-inner">
        <div className="header-logo">
          T
        </div>
        <ul className="header-nav-center">
          DISACCORD TEST [ DOWNLOAD, BLAH BLAH, TEST2, TEST3, TEST4, TEST 5 ]
        </ul>

        <ul className="header-nav-right">
          <Link className="btn" to="/login">Log In</Link>
        </ul>
      </nav>
    </header>
    <GreetingContainer />
    <AuthRoute path="/login"  component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);