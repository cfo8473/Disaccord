import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SettingsContainer from '../settings/settings_container';
import CreateUserIconContainer from '../settings/create_user_icon_container';
import GreetingsContainer from "../greeting/greeting_container";
import CreateServerContainer from '../servers/create_server_container'
import CreateChannelContainer from '../channels/create_channel_container'
import EditServerContainer from '../servers/edit_server_container'
import EditSettingsContainer from '../settings/edit_settings_container'
import ServerModalContainer from '../servers/server_modal_container'

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
    case "editServer":
      component = <EditServerContainer />;
      break;
    case "createChannel":
      component = <CreateChannelContainer/>;
      break;
    case "openServerModal":
      component = <ServerModalContainer />;
      break;
    case "uploadUserIcon":
      component = <CreateUserIconContainer/>;
      break;
    case "editSettings":
      component = <EditSettingsContainer/>;
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
