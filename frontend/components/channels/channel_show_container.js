import React from 'react';
import { connect } from 'react-redux';
import ChannelShow from './channel_show'
import { withRouter } from "react-router-dom"
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchServers, fetchServer } from "../../actions/server_actions"
import { fetchChannels } from '../../actions/channel_actions'
import { fetchUsers } from '../../actions/user_actions'
import { fetchMessages } from '../../actions/message_actions'
import { updateServer, updateChannel } from '../../actions/active_actions'

const msp = (state, ownProps) => {
  let currentUser = state.session.currentUser
  let servers = state.entities.servers;
  let channels = state.entities.channels;
  let users = state.entities.users;
  let channel = state.ui.active.channel;
  let messages = state.entities.messages;

  return {
    currentUser: currentUser,
    servers: servers,
    channels: channels,
    users: users,
    channel: channel,
    messages: messages
  }
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal()),
  openServerModal: () => dispatch(openModal("createServer")),
  openModal: modalType => dispatch(openModal(modalType)),
  fetchChannels: () => dispatch(fetchChannels()),
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (id) => dispatch(fetchServer(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchMessages: () => dispatch(fetchMessages()),
  openSettings: <button className="settings-icon" onClick={() => dispatch(openModal('settings'))}>
    <FontAwesomeIcon icon={faCog} />
  </button>,
  updateChannel: (channelId) => dispatch(updateChannel(channelId)),
});

export default withRouter(connect(msp, mdp)(ChannelShow));