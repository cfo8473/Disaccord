import React from 'react';
import { faUser, faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.serverInfo;
    this.closeWindow = this.closeWindow.bind(this);
    this.close = false;
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef} className={`modal-serverModal` + (this.close ? `-reverse` : ``)}>
        <p className="modal-serverModalGreet">OH, ANOTHER SERVER HUH?</p>
        <div className="create-server-container" >
          <span className="modal-serverModalCreateHeader">CREATE</span>
          <div className="modal-serverModalCreateText">Create a new server and invite your friends. It's free!</div>
          <div className="modal-serverModalCreateIcon"><FontAwesomeIcon icon={faUser} /></div>
          <button className="modal-serverModalButton" onClick={() => this.props.createServer()}>Create a Server</button>
        </div>

        <div className="join-server-container">
          <span className="modal-serverModalJoinHeader">Join</span>
          <div className="modal-serverModalJoinText">Enter an invite and join your friend's server!</div>
          <div className="modal-serverModalJoinIcon"><FontAwesomeIcon icon={faPersonBooth} /></div>
          <input className="modal-serverModalJoinButton" type="submit" value="Join a server" />
        </div>
      </div>
    )
  }
}

export default ServerModal;