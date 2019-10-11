import React from 'react';
import { connect } from 'react-redux';
import ServerShow from './server_show'
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
  currentUser: state.session.currentUser
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal()),
  openModal: <button className="settings-icon" onClick={() => dispatch(openModal('settings'))}>
    [ O ]
      </button>
});

export default connect(msp, mdp)(ServerShow);