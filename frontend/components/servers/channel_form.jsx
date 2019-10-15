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
    // console.log(serverId);  
    this.props.channelInfo.server_id = serverId;


    // debugger

    return (
      <div className="modal-createChannel">
        <p className="modal-createChannelGreet">CREATE TEXT CHANNEL</p>
        <p className="modal-createChannelGreetText">in Text Channels</p>
        <form className="modal-createChannelInput" onSubmit={this.handleSubmit}>
          <label className="modal-createChannelTitle">CHANNEL NAME</label>
          <input className="modal-createChannelTitleInput" type="text" value={this.state.title} onChange={this.update("title")} />
          <div>
          <span className="modal-createChannelCancel" onClick={this.props.closeModal}>Cancel</span>
          <input className="modal-createChannelButton" type="submit" value="Create" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ChannelForm);