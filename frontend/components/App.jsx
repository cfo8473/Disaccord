import React from "react";
import Modal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'
import ServerContainer from './servers/server_show_container'
import ServerChannelIndexContainer from './servers/server_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

export default () => (
  <div className="test">
    <Modal/>
    <AuthRoute exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login"  component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path ="/servers" component={ServerContainer}/>
    {/* pull in the ffirst server of current user */}
    
  </div>
);