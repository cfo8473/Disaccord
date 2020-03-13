import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import UsersIndex from './users_index'
import { fetchServer } from '../../actions/server_actions'
import {fetchUsers } from '../../actions/user_actions'

const msp = (state) => {
  let users = state.entities.users;
  let currentUser = state.session.currentUser;
  let servers = state.entities.servers;
  let server = state.entities.servers[state.ui.active.server];
  
  return {
    users: users,
    currentUser: currentUser,
    servers: servers,
    server: server
  }
};

const mdp = (dispatch) => {
  return {
    processForm: formChannel => dispatch(createChannel(formChannel)),
    clearErrors: () => dispatch(clearErrors({ errors: [] })),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  }
};

export default connect(msp, mdp)(UsersIndex);
