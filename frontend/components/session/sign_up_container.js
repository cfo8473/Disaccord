import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import { clearErrors, login } from '../../actions/session_actions'
import SessionForm from './session_form'

const msp = (state, ownProps) => {
  const errors = state.errors.session.errors;
  let userInfo = {username: "", password: "", email: ""}
  
  return {
    userInfo,
    formType: "signup",
    errors: errors
  }
};

const mdp = (dispatch, ownProps) => {
  const guest = { username: "GuestUser", password: "hunter2" };
  return {
    processForm: formUser => dispatch(signup(formUser)),
    clearErrors: () => dispatch(clearErrors()),
    guestLogin: () => dispatch(login(guest)),
  }
};

export default connect(msp, mdp)(SessionForm);
