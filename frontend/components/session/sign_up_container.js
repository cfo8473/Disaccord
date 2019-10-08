import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
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

const mdp = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(signup(formUser))
});

export default connect(msp, mdp)(SessionForm);
