import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import ServerModal from './server_modal'

const msp = (state) => {
  const errors = state.errors.session.errors;
  let serverInfo = { title: "", admin_id: `${state.session.currentUser.id}` }
  return {
    serverInfo,
    formType: "create",
    errors: errors
  }
};

const mdp = (dispatch) => {
  return {
    processForm: formServer => dispatch(createServer(formServer)),
    createServer: modalType => dispatch(openModal("createServer")),
    openModal: modalType => dispatch(openModal(modalType)),
    clearErrors: () => dispatch(clearErrors({ errors: [] })),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(ServerModal);
