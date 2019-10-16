import { connect } from 'react-redux';
import React from 'react'
import { withRouter } from "react-router-dom"
import ServerChannelIndex from './server_channel_index'
import { fetchServers, removeServer, fetchServer } from '../../actions/server_actions'
import { fetchChannels } from '../../actions/channel_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateServer, updateChannel} from '../../actions/active_actions'


const msp = (state, ownProps) => {
  console.log(state)
  let currentUser = state.session.currentUser
  let servers = state.entities.servers;
  let server = state.entities.servers[ownProps.match.params.serverId];
  let channels = state.entities.channels

  return {
    currentUser: currentUser,
    servers: servers,
    server: server,
    channels: channels
  }
};

const mdp = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (id) => dispatch(fetchServer(id)),
  fetchChannels: () => dispatch(fetchChannels()),
  removeServer: (serverId) => dispatch(removeServer(serverId)),
  closeModal: () => dispatch(closeModal()),
  openServerModalEdit: () => dispatch(openModal("editServer")),
  // openModal: (modalType, serverId) => dispatch(openModal(modalType, serverId)),
  openModal: (modalType) => dispatch(openModal(modalType)),
  openSettings: <button className="settings-icon" onClick={() => dispatch(openModal('settings'))}>
    <FontAwesomeIcon icon={faCog} />
  </button>,
  updateServer: (serverId) => dispatch(updateServer(serverId)),
  updateChannel: (channelId) => dispatch(updateChannel(channelId)),

})

export default withRouter(connect(msp, mdp)(ServerChannelIndex));