import React from 'react';
import {withRouter} from 'react-router-dom'

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.channelInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    
    this.props.processForm(server);
    this.props.closeModal();
  }

  render() {
    let serverId = this.props.location.pathname.split("/")[2];
    this.props.channelInfo.server_id = serverId;

    return (
      <div className="modal-createChannel">
        <p className="modal-createChannelGreet">CREATE TEXT CHANNEL</p>
        <p className="modal-createChannelGreetText">in Text Channels</p>
        <p className="login-text"> CHANNEL TYPE</p>
        <button className="channel-text-button"><input className="checkbox" type="checkbox" checked/> # Text Channel</button>
        <button className="channel-text-button-deactivate"><input className="checkbox" type="checkbox" /> # Text Channel</button>
        <form className="modal-createChannelInput" onSubmit={this.handleSubmit}>
          <label className="modal-createChannelTitle">CHANNEL NAME</label>
          <input className="modal-createChannelTitleInput" type="text" value={this.state.title} onChange={this.update("title")} />
          <div className="createChannelDarkBar">
            <span className="modal-createChannelCancel" onClick={this.props.closeModal}>Cancel</span>
            <input className="modal-createChannelButton" type="submit" value="Create Channel" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ChannelForm);