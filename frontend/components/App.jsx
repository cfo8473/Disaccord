import React from "react";
import Modal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import { Link} from 'react-router-dom'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'
import ServerContainer from './servers/server_show_container'
import {Route} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <div>
    <Modal/>

    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login"  component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path ="/" component={ServerContainer}/>
  </div>
);