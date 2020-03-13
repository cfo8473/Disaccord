import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import ChannelForm from './create_channel_form'

const msp = (state, ownProps) => {
  const errors = state.errors.session.errors;
  let created = false;
  let channelInfo = { title: "", server_id: '', topic: "Default topic!" }
  return {
    channelInfo,
    created: created,
    formType: "create",
    res: null,
    errors: errors
  }
};

const mdp = (dispatch) => {
  return {
    processForm: formChannel => dispatch(createChannel(formChannel)),
    clearErrors: () => dispatch(clearErrors({ errors: [] })),
    closeModal: () => dispatch(closeModal()),
    updateChannel: (channelId) => dispatch(updateChannel(channelId)),
  }
};

export default connect(msp, mdp)(ChannelForm);
