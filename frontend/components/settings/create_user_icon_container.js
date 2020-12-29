import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateUserIcon from './create_user_icon'
import { editUser } from '../../actions/user_actions'

const msp = (state) => {
  const errors = state.errors.session.errors;
  let iconInfo = { icon_id: '', membership_type: '', membership_type: 'User' }
  return {
    iconInfo,
    formType: "create",
    errors: errors
  }
};

const mdp = (dispatch) => {
  return {
    editUser: (user) => dispatch(editUser(user)),
    processForm: formIcon => dispatch(createServer(formIcon)),
    clearErrors: () => dispatch(clearErrors({ errors: [] })),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(CreateUserIcon);
