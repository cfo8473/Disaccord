import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'
import { AuthRoute } from '../util/route_util'

export default () => (
  <div>
    <header>
      <h1>DISACCORD TEST</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login"  component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);