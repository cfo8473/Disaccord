import React from 'react';
import { connect } from 'react-redux';
import ServerIndex from './server_index'
import { logout } from '../../actions/session_actions'
import { fetchServers } from '../../actions/server_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const msp = (state) => {
  let currentUser = state.session.currentUser
  // debugger
  //let currentServers = state.entities.servers <-- hopefully?
  return (
    currentUser
    //,currentServers
  )
};


const mdp = dispatch => ({
  fetchServers: () => dispatch(fetchServers())
})

export default connect(msp, mdp)(ServerIndex);