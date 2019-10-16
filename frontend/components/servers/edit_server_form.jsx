import React from 'react';
import { withRouter, Route, Redirect } from "react-router-dom"

class EditServerForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.serverInfo;
    this.state = Object.assign({}, this.props.serverInfo)
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
    this.props.processForm(server);
    this.props.closeModal();
  }

  deleteServer(e) {
    
    this.props.removeServer(this.props.server);
    
    let serverList = Object.values(this.props.servers);
    let lastServer = serverList[serverList.length-2];
    console.log(lastServer);
    this.props.closeModal();
    console.log(`/servers/${lastServer.id}`);
    // not working correctly
    <Redirect to={`/servers/${lastServer.id}/`} />
    
  }

  render() {
    let serverId = this.props.location.pathname.split("/")[2];
    let currentServer;
    console.log(this.props)
    if (typeof(this.props.servers) !== 'undefined') {
      currentServer = this.props.servers[this.props.server];
      this.state.admin_id = this.props.servers[serverId].admin_id;
      this.state.id= this.props.servers[serverId].id;
    }
    console.log(currentServer)

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
                <input className="modal-editServerTitleInput" type="text" placeholder={currentServer.title} value={this.props.title} onChange={this.update("title")} />
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