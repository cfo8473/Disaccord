import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import EditSettings from './edit_settings'
import { editUser } from '../../actions/user_actions'
const msp = (state) => {
  let currentUser = state.entities.users[state.session.currentUser.id]
  let iconInfo = { icon_id: '', membership_type: '', membership_type: 'User' }
  let postInfo = { title: '' }
  let userInfo = { username: '', email: ''}
  return (
    postInfo,
    iconInfo,
    userInfo,
    currentUser
  )
};

const mdp = dispatch => {
  return {
    editUser: (user) => dispatch(editUser(user)),
    logout: () => dispatch(logout()),
    otherForm: (
      <button onClick={() => dispatch(openModal(logout))}>Logout</button>
    ),
    openSettingsModal: () => dispatch(openModal("settings")),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(EditSettings);
