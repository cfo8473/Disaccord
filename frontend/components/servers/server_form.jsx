import React from 'react';
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.serverInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.close = false;
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  closeWindow() {
    this.close = true;

    setTimeout(() => {
      this.props.closeModal();
      this.close = false;
    }, 150)

    this.forceUpdate();
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeWindow();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    this.props.processForm(server);
    this.props.closeModal() ;
  }

  render() {
    return (
      <div ref={this.setWrapperRef} className={`modal-createServer` + (this.close ? `-reverse` : ``)}>
        <p className="modal-createServerGreet">CREATE YOUR SERVER</p>
        <p className="modal-createServerGreetText">By creating a server, you will have access to text chat to use amongst your friends.</p>
        <form className="modal-createServerInput" onSubmit={this.handleSubmit} >
          <label className="modal-createServerTitle">SERVER NAME</label>
          <input className="modal-createServerTitleInput" type="text" value={this.state.title} placeholder="Enter a server name" onChange={this.update("title")}/>
          <label className="modal-createServerRegion">SERVER REGION</label>
          <div className="region-container">
            <div className="region-icon"><FontAwesomeIcon icon={faFlagUsa} /></div>
            <div className="region-text">US West</div>
          </div>

          <div className="server-icon"/>

          <span className="server-icon-warning">Minimum Size: <strong>128x128</strong></span>
          
          <div className="createServerFooter" >
            <div className="createServerReturn" onClick={() => this.closeWindow()}> ← BACK </div>
           <input className="modal-createServerButton" type="submit" value="Create"/>
          </div>
       
        </form>
      </div>
    )
  }
}

export default ServerForm;