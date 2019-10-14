import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import ServerForm from './server_form'

const msp = (state, ownProps) => {
  const errors = state.errors.session.errors;
  let serverInfo = { title: "", admin_id: `${state.session.currentUser.id}`}
  return {
    serverInfo,
    formType: "create",
    errors: errors
  }
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: formServer => dispatch(createServer(formServer)),
    clearErrors: () => dispatch(clearErrors({errors: []})),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(ServerForm);
