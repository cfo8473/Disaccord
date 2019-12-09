import { connect } from 'react-redux';
import React from 'react'
import { withRouter } from "react-router-dom"
import ChannelIndex from './channel_index'
import { fetchServers, removeServer, fetchServer } from '../../actions/server_actions'
import { fetchChannels } from '../../actions/channel_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateServer, updateChannel} from '../../actions/active_actions'
import { fetchMessages } from '../../actions/message_actions'

const msp = (state, ownProps) => {

  let currentUser = state.session.currentUser
  let servers = state.entities.servers;
  let server = state.entities.servers[ownProps.match.params.serverId];
  let channels = state.entities.channels;
  let users = state.entities.users;

  return {
    currentUser: currentUser,
    servers: servers,
    server: server,
    channels: channels,
    users: users
  }
};

const mdp = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (id) => dispatch(fetchServer(id)),
  fetchChannels: () => dispatch(fetchChannels()),
  fetchMessages: () => dispatch(fetchMessages()),
  removeServer: (serverId) => dispatch(removeServer(serverId)),
  closeModal: () => dispatch(closeModal()),
  openServerModalEdit: () => dispatch(openModal("editServer")),
  // openModal: (modalType, serverId) => dispatch(openModal(modalType, serverId)),
  openModal: (modalType) => dispatch(openModal(modalType)),
  openSettings: <button className="settings-icon tooltips" onClick={() => dispatch(openModal('settings'))}>
    <FontAwesomeIcon icon={faCog} />
    <span>User Settings</span>
  </button>,

  // openSettings: <button className="settings-icon" onClick={() => dispatch(openModal('settings'))}>
  //   <FontAwesomeIcon icon={faCog} />
  //   <span className="tooltip-wrapper"><span className="tooltip-set">User Settings</span></span>
  // </button>,
  updateServer: (serverId) => dispatch(updateServer(serverId)),
  updateChannel: (channelId) => dispatch(updateChannel(channelId)),

})

export default withRouter(connect(msp, mdp)(ChannelIndex));