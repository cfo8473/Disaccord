import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import ChannelForm from './channel_form'

const msp = (state, ownProps) => {
  debugger
  const errors = state.errors.session.errors;
  let channelInfo = { title: "", server_id: `${state.session.server.id}`, topic: "Default topic!" }
  return {
    channelInfo,
    formType: "create",
    errors: errors
  }
};

const mdp = (dispatch) => {
  return {
    processForm: formChannel => dispatch(createChannel(formServer)),
    clearErrors: () => dispatch(clearErrors({ errors: [] })),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(ChannelForm);
