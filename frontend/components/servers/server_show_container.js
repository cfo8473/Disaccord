import React from 'react';
import { connect } from 'react-redux';
import ServerShow from './server_show'
import { withRouter } from "react-router-dom"
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchServers, fetchServer } from "../../actions/server_actions"
import { fetchChannels } from '../../actions/channel_actions'
import { fetchUsers } from '../../actions/user_actions'
import { updateServer, updateChannel } from '../../actions/active_actions'

const msp = (state, ownProps) => {
  let currentUser = state.session.currentUser
  let servers = state.entities.servers;
  let channels = state.entities.channels;
  let users = state.entities.users;
  console.log(state)


  
  return {
    currentUser: currentUser,
    servers: servers,
    channels: channels,
    users: users,
  }
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal()),
  openServerModal: () => dispatch(openModal("openServerModal")),
  openModal: modalType => dispatch(openModal(modalType)),
  fetchChannels: () => dispatch(fetchChannels()),
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (id) => dispatch(fetchServer(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  openSettings: <button className="settings-icon" onClick={() => dispatch(openModal('settings'))}>
    <FontAwesomeIcon icon={faCog} />
  </button>,
  updateChannel: (channelId) => dispatch(updateChannel(channelId)),
});

export default withRouter(connect(msp, mdp)(ServerShow));