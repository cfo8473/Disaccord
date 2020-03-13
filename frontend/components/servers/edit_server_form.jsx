import React from 'react';
import { withRouter, Route, Redirect } from "react-router-dom"

class EditServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.serverInfo)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteServer = this.deleteServer.bind(this);
    this.status = this.props.status;
    this.nextServer = this.props.nextServer;
    this.closeWindow = this.closeWindow.bind(this);
    this.close = false;
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers()
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

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    this.props.processForm(server);
    this.props.closeModal();
  }

  deleteServer(e) {
    this.props.removeServer(this.props.server);
    let serverList = Object.values(this.props.servers);
    let lastServer = serverList[serverList.length-2];
    this.status = true;
    this.forceUpdate();
    this.nextServer = lastServer.id;
  }

  render() {
    let serverId = this.props.location.pathname.split("/")[2];
    let currentServer;

    if (this.status) {
      console.log(this.nextServer);
      this.props.closeModal();
      return <Redirect to={`/servers/${this.nextServer}/`} />
    }

    if (typeof(this.props.servers) !== 'undefined') {
      currentServer = this.props.servers[this.props.server];
      this.state.admin_id = this.props.servers[serverId].admin_id;
      this.state.id= this.props.servers[serverId].id;
    }

    const flavorText = (
      <div className="editServerFlavorText">
        <h1 className="settings-two-factor-edit">Other settings would go here...</h1>
        <br></br>
        <h2>...but a server only has a dynamic name attribute at the moment so heres a lorem ipsum block.</h2>
        <br></br>

        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )

    return (
      <div ref={this.setWrapperRef} className={`modal-settings` + (this.close ? `-reverse` : ``)}>
        <nav className="menu-bar">
          <div className="settings-logout" onClick={this.deleteServer}>Delete Server</div>
        </nav>

        <div className="modal-settings-server">
          <div className="modal-settings-server-text">
            <p className="modal-serverOverviewGreet">SERVER OVERVIEW</p>

            <form onSubmit={this.handleSubmit}>
              <div className="modal-editServerInput">
                <label className="modal-editServerTitle">SERVER NAME</label>
                <input className="modal-editServerTitleInput" type="text" placeholder={currentServer.title} value={this.props.title} onChange={this.update("title")} />
                <input className="modal-createServerButton" type="submit" value={this.props.formType} />
              </div>
            </form>

          </div>
        </div>
        
        {flavorText}
        <p className="settings-exit" onClick={() => this.closeWindow()}>X</p>

      </div>
    )
  }
}

export default withRouter(EditServerForm);