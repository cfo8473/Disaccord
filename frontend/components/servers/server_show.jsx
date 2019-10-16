import React from "react";
import { faAddressCard, faDog, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UsersIndexContainer from '../users/users_index_container'
import ServerIndexContainer from './server_index_container'
import { AuthRoute, ProtectedRoute, Redirect } from '../../util/route_util'
import ChannelIndexContainer from '../channels/channel_index_container'

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
    this.props.fetchServer(this.props.location.pathname.split("/")[2])
  }



  render() {

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
    if (this.props.location.pathname.split("/").length >= 3) {
      channelId = this.props.location.pathname.split("/")[3];
      if (this.props.channels[channelId]) {
        channelTitle = this.props.channels[channelId].title
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
          <div className="nav-content-header">{channelTitle}
          </div>
            <div className="content-block">
    
                <div className="nav-content-messages">
                  <div className="nav-content-message-block">
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}
                    {loremIpsum}

                  </div>
              <div className="nav-content-message-bar">
                <form>
                  <textarea className="nav-content-message-box" onKeyDown={this.onEnterPress} placeholder="Message #channelplaceholder"></textarea>
                </form>
              </div>
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

export default ServerShow;