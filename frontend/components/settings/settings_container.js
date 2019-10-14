import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import Settings from './settings'

const msp = (state) => {
  let currentUser = state.entities.users[state.session.currentUser.id]
  return (
    currentUser
  )
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    otherForm: ( 
      <button onClick={() => dispatch(openModal(logout))}>Logout</button>
    ),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(Settings);
