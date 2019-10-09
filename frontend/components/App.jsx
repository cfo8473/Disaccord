import React from "react";
import Modal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import { Link} from 'react-router-dom'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'
import { AuthRoute } from '../util/route_util'

export default () => (
  <div>
    <Modal/>
    <GreetingContainer />
    <AuthRoute path="/login"  component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);