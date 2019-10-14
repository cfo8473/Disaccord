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
  
  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId);
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
    if (!this.props.server) { return (
      <div>Loading...</div>
    ) } else {
      return (

          <nav className="nav-channels">
            <header className="nav-channels-header">
              {this.props.server.title}
            </header>

            <div className="nav-channels-list">
              {loremIpsum}

              {/* <ServerChannelIndexContainer/> */}
            </div>

            {/* delete debug */}

            <br></br>
            <button  
              onClick={() => this.props.removeServer(this.props.server.id)}>
              DEBUG DELETESERVER
            </button>

            {userBox}
          </nav>

          

      )
     }

  }

}

export default ServerChannelIndex;