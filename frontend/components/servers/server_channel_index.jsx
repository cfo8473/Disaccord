import React from "react";
import { faAddressCard, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServerChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: this.props.server
    }
      // debugger
  }

  

  render() {
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

    const loremIpsum = (
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )

    let server;
    const serverTitle = (typeof (this.props.server) !== 'undefined' ) ? (
      server = this.props.server.title
    ) : (
      <div></div>
    )

    let serverId;
    const serverIdNum = (typeof (this.props.server) !== 'undefined') ? (
      serverId = this.props.server.id
    ) : (1111)
      
    // if (this.state.server) {
    //   let server = this.state.server.id;
    // }
    // debugger
    return (

        <nav className="nav-channels">
          <header className="nav-channels-header">
            {serverTitle}
          </header>

          <div className="nav-channels-list">
            {loremIpsum}

            {/* <ServerChannelIndexContainer/> */}
          </div>

          {/* delete debug */}

          <br></br>
          <button  
            onClick={() => this.props.removeServer(serverIdNum)}>
            DEBUG DELETESERVER
          </button>

          {userBox}
        </nav>

        

    )

  }

}

export default ServerChannelIndex;