import React from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../actions/message_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateMessageForm from './create_message_form'
import { updateServer, updateChannel } from '../../actions/active_actions'

const msp = (state, ownProps) => {
  const errors = state.errors.session.errors;
  let messageInfo = { body: '', author_id: '', channel_id: '', pinned: Boolean(false) }
  let channels = state.entities.channels
  let channel = state.ui.channelId;
  let currentUser = state.session.currentUser.id;
  // debugger
  console.log(channel)
  return {
    messageInfo,
    channels: channels,
    errors: errors,
    channel: channel,
    currentUser: currentUser
  }
};

const mdp = (dispatch) => {
  return {
    processForm: formMessage => dispatch(createMessage(formMessage)),
    clearErrors: () => dispatch(clearErrors({ errors: [] })),
    closeModal: () => dispatch(closeModal()),
    updateChannel: (channelId) => dispatch(updateChannel(channelId)),
  }
};

export default connect(msp, mdp)(CreateMessageForm);
