import { connect } from 'react-redux';
import React from 'react'
import ServerChannelIndex from './server_channel_index'
import { fetchServers, removeServer } from '../../actions/server_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const msp = (state, ownProps) => {
  // debugger
  let currentUser = state.session.currentUser
  let servers = state.entities.servers;
  let server = state.entities.servers[ownProps.match.params.serverId];
  // debugger
  return {
    currentUser: currentUser,
    servers: servers,
    server: server
  }
};

const mdp = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  removeServer: (serverId) => dispatch(removeServer(serverId)),
  closeModal: () => dispatch(closeModal()),
  openSettings: <button className="settings-icon" onClick={() => dispatch(openModal('settings'))}>
    <FontAwesomeIcon icon={faCog} />
  </button>,

})

export default connect(msp, mdp)(ServerChannelIndex);