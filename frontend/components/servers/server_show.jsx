import React from "react";
import { faAddressCard, faDog, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'
import UsersIndexContainer from '../users/users_index_container'
import ServerIndexContainer from './server_index_container'
import { AuthRoute, ProtectedRoute, Redirect } from '../../util/route_util'
import ChannelIndexContainer from '../channels/channel_index_container'
import ChannelShowContainer from '../channels/channel_show_container'
import CreateMessageContainer from '../messages/create_message_container'

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.onEnterPress = this.onEnterPress.bind(this)
  }

  onEnterPress(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      e.target.value = "";
    }
  }


  componentDidMount() {
    this.props.fetchChannels(),
    this.props.fetchUsers(),
    this.props.fetchServer(this.props.location.pathname.split("/")[2]),
      this.props.updateChannel(this.props.match.params.channelId)
  }


  render() {
    // debugger
    const addServer = (
      <div>
        <button className="nav-servers-add-server tooltips" onClick={this.props.openServerModal}>
          <p className="nav-servers-button-spacer">+</p>
          <span>Add Server</span>
        </button>
      </div>
    )

    const home = (
      <div>
        <button className="nav-servers-button tooltips">
          <p className="nav-servers-home-button-spacer nav-servers-home"><FontAwesomeIcon icon={faHome} /></p>
          <span>Home (not added)</span>
        </button>
        <div className="nav-servers-home-spacer"></div>
      </div>
    )

    const userBox = (
      <div className="current-user-block">
        <div className="username-icon"><FontAwesomeIcon icon={faAddressCard} /></div>
        <div className="username-box">
          <div className="username-text">{this.props.currentUser.username}</div>
          <div className="username-id">#{this.props.currentUser.id}</div>
        </div>
        {this.props.openSettings}
      </div>
    )

    // test const for Lorem ipsum
    const loremIpsum = (
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )

    let channelId;
    let channelTitle = "";
    let channelTopic = "";
    // debugger
    if (this.props.location.pathname.split("/").length >= 3) {
      channelId = this.props.location.pathname.split("/")[3];
      if (this.props.channels[channelId]) {
        channelTitle = `# ${this.props.channels[channelId].title}`;
        channelTopic = this.props.channels[channelId].topic;
      }
    }
    let currentUser = this.props.users[this.props.currentUser.id]
    let defaultServer = currentUser.joinedServerIds[0];

    return (
      <div className="navbar">
        <nav className="nav-servers">
          {home}
          <ServerIndexContainer />
          {addServer}
        </nav>

        
        <ProtectedRoute path='/servers/:serverId' component={ChannelIndexContainer} />
        <div className="nav-block">
          <div className="nav-content-header">{channelTitle}  <span className="login-text">| {channelTopic}</span>
          </div>
            <div className="content-block">
    
                <div className="nav-content-messages">
                  <div className="nav-content-message-block">
    
      
                <ProtectedRoute path={`/servers/:serverId/:channelId`} component={ChannelShowContainer} />
                
                  </div>
                  
              {/* <div className="nav-content-message-bar">
                <CreateMessageContainer/>
              </div> */}
              
                <CreateMessageContainer />
              

              
                </div>
                

                
            {/* Users NavBar (4th) */}
            <nav className="nav-users">
              <UsersIndexContainer users={this.props.users}/>
            </nav>
            </div>
          {/* <div style={{ float: "left", clear: "both" }}
            ref={(el) => { this.messagesEnd = el; }}>
          </div> */}
          </div>
        
      </div>
    );
  }
}

export default withRouter(ServerShow);