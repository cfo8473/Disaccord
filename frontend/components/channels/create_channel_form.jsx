import React from 'react';
import {withRouter, Redirect} from 'react-router-dom'

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = this.props.channelInfo;
    this.created = this.props.created;
    this.res = this.props.res;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.close = false;
    this.closeWindow = this.closeWindow.bind(this);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.channelInfo.server_id);
    const server = Object.assign({}, this.state);
    
    this.props.processForm(server).then( (response) => {
      this.setState()
      // console.log(response);
      // console.log(`/servers/${this.props.channelInfo.server_id}/${response.id}`)
      this.setState({ channelInfo: this.state.channelInfo });
      this.res = response.id;
      this.created = true;
      this.forceUpdate();
      
    });
    
    // return <Redirect to={`servers/${this.props.channelInfo.server_id}/55`} />
    
    
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeWindow();
    }
  }

  closeWindow() {
    this.close = true;

    setTimeout(() => {
      this.props.closeModal();
      this.close = false;
    }, 150)
    
    this.forceUpdate();
  }

  render() {
    let serverId = this.props.location.pathname.split("/")[2];
    this.props.channelInfo.server_id = serverId;

    // console.log(this.created);
    if (this.created) {
      console.log("HIT IT!");
      this.props.closeModal();
      return <Redirect to={`/servers/${this.props.channelInfo.server_id}/${this.res}`} />
    }

    return (
      <div ref={this.setWrapperRef} className={`modal-createChannel` + (this.close ? `-reverse` : ``)}>
        <p className="modal-createChannelGreet">CREATE TEXT CHANNEL</p>
        <p className="modal-createChannelGreetText">in Text Channels</p>
        <p className="login-text"> CHANNEL TYPE</p>
        <button className="channel-text-button"><input className="checkbox" type="checkbox" checked readOnly/> # Text Channel</button>
        {/* <button className="channel-text-button-deactivate"><input className="checkbox" type="checkbox" /> # ...another Text Channel</button> */}
        <form className="modal-createChannelInput" onSubmit={this.handleSubmit}>
          <label className="modal-createChannelTitle">CHANNEL NAME</label>
          <input className="modal-createChannelTitleInput" type="text" value={this.state.title} onChange={this.update("title")} />
          <div className="createChannelDarkBar">
            <span className="modal-createChannelCancel" onClick={() => this.closeWindow()}>Cancel</span>
            <input className="modal-createChannelButton" type="submit" value="Create Channel" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ChannelForm);