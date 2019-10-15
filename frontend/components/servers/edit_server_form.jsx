import React from 'react';
import { withRouter, Route, Redirect } from "react-router-dom"

class EditServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.serverInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteServer = this.deleteServer.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers()
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    console.log(server);
    this.props.processForm(server);
    this.props.closeModal();
  }

  deleteServer(e) {
    let serverId = this.props.location.pathname.split("/")[2];
    this.props.removeServer(serverId);
    this.props.closeModal();
    <Redirect to={`/servers/`}/> // bug
    console.log("Deleted server!")
  }

  render() {
    let serverId = this.props.location.pathname.split("/")[2];
    let currentServer;

    if (typeof(this.props.servers) !== 'undefined') {
      currentServer = this.props.servers[serverId];
      this.props.serverInfo.admin_id = this.props.servers[serverId].admin_id 
    }

    return (

      <div className="modal-settings">
        <nav className="menu-bar">

          <div className="settings-logout" onClick={this.deleteServer}>Delete Server</div>
        </nav>

        <div className="modal-settings-server">
          <div className="modal-settings-server-text">

            <p className="modal-serverOverviewGreet">SERVER OVERVIEW</p>

            <form onSubmit={this.handleSubmit}>
              <div className="modal-editServerInput">
                <label className="modal-editServerTitle">SERVER NAME</label>
                <input className="modal-editServerTitleInput" type="text" value={currentServer.title} onChange={this.update("title")} />
                <input className="modal-createServerButton" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        </div>

        <p className="settings-exit" onClick={this.props.closeModal}>X</p>

      </div>
    )
  }
}

export default withRouter(EditServerForm);