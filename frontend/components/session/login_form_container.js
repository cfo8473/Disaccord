import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors  } from '../../actions/session_actions'
import SessionForm from './session_form'

const msp = (state, ownProps) => {
  const errors = state.errors.session.errors;
  let userInfo = { username: "", password: "" }
  return {
    userInfo,
    formType: "login",
    errors: errors
  }
};

const mdp = (dispatch, ownProps) => {
  const guest = { username: "GuestUser", password: "hunter2"};
  return {
    processForm: formUser => dispatch(login(formUser)),
    guestLogin: () => dispatch(login(guest)),
    clearErrors: () => dispatch(clearErrors({errors: []}))
  }
};

export default connect(msp, mdp)(SessionForm);
