import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting'
import {logout} from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const msp = (state) => ({
  currentUser: state.session.currentUser
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal()),
  openModal: <button className="settings-icon" onClick={() => dispatch(openModal('settings'))}>
    <FontAwesomeIcon icon={faCog} />
      </button>
});

export default connect(msp, mdp)(Greeting);