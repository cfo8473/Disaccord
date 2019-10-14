import React from 'react';
import { connect } from 'react-redux';
import ServerShow from './server_show'
import { withRouter } from "react-router-dom"
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchServers, fetchServer } from "../../actions/server_actions"

const msp = (state, ownProps) => {
  let currentUser = state.session.currentUser
  let servers = state.entities.servers;
  let server = state.entities.servers[ownProps.match.params.serverId];

  return {
    currentUser: currentUser,
    servers: servers,
    server: server
  }
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal()),
  openSettings: <button className="settings-icon" onClick={() => dispatch(openModal('settings'))}>
    <FontAwesomeIcon icon={faCog} />
      </button>,
  openServerModal: () => dispatch(openModal("createServer")),
  openModal: modalType => dispatch(openModal(modalType)),
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (id) => dispatch(fetchServer(id)),
});

export default withRouter(connect(msp, mdp)(ServerShow));