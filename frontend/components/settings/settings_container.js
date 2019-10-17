import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import Settings from './settings'

const msp = (state) => {
  let currentUser = state.entities.users[state.session.currentUser.id]
  let iconInfo = { icon_id: '', membership_type: '', membership_type: 'User' }
  let postInfo = { title: '' }
  return (
    postInfo,
    iconInfo,
    currentUser
  )
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    otherForm: ( 
      <button onClick={() => dispatch(openModal(logout))}>Logout</button>
    ),
    openServerModal: () => dispatch(openModal("editSettings")),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(Settings);
