import React from 'react';
import { connect } from 'react-redux';
import { fetchServer, fetchServers } from '../../actions/server_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import EditServerForm from './edit_server_form'
import { editServer, removeServer } from '../../actions/server_actions'

const msp = (state) => {
  const errors = state.errors.session.errors;
  let serverInfo = { title: '', admin_id: ``, id: ""}
  let servers = state.entities.servers;
  let server = state.ui.active.server;

  return {
    serverInfo,
    status: false,
    nextServer: null,
    formType: "Edit",
    errors: errors,
    servers: servers,
    server: server
  }
};

const mdp = (dispatch) => {
  return {
    fetchServer: id => dispatch(fetchServer(id)),
    fetchServers: () => dispatch(fetchServers()),
    removeServer: (serverId) => dispatch(removeServer(serverId)),
    processForm: formServer => dispatch(editServer(formServer)),
    clearErrors: () => dispatch(clearErrors({ errors: [] })),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(EditServerForm);
