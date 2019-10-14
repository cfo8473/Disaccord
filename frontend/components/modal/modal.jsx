import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SettingsContainer from '../settings/settings_container';
import GreetingsContainer from "../greeting/greeting_container";
import CreateServerContainer from '../servers/create_server_container'
import CreateChannelContainer from '../servers/create_channel_container'

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'settings':
      component = <SettingsContainer />;
      break;
    case 'greetings':
      component = <GreetingsContainer />;
      break;
    case "createServer":
      component = <CreateServerContainer/>;
      break;
    case "createChannel":
      component = <CreateChannelContainer/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
