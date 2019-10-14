import React from "react";
import { faAddressCard, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ServerIndexContainer from './server_index_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util'
import ServerChannelIndexContainer from './server_channel_index_container'

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }
  
  // componentDidMount() {
  //   this.props.fetchServer(this.props.match.params.id)
  // }

  // buggy as servers is not being passed through properly
  // componentDidUpdate(prevProps) {
  //   if (prevProps.server.id != this.props.match.params.id) {
  //     this.props.fetchServer(this.props.match.params.id);
  //   }
  // }

  render() {
    <ProtectedRoute path='/servers/:serverId' component={ServerChannelIndexContainer} />

    const addServer = (
      <div>
        <button className="nav-servers-button " onClick={this.props.openServerModal}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
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

    return (
      <div className="navbar">
        <nav className="nav-servers">
          {addServer}
          <ServerIndexContainer/>
        </nav>

        <nav className="nav-channels">
          <header className="nav-channels-header">
            Current Server Placeholder
          </header>

          <div className="nav-channels-list">
           {loremIpsum}
           {/* <ServerChannelIndexContainer/> */}
          </div>

          {userBox}
        </nav>
                    
        <nav className="nav-content">
          <header className="nav-content-header"># current channel:[test]</header>
          <div className="nav-content-messages">
            {loremIpsum}
            {loremIpsum}
            {loremIpsum}
            {loremIpsum}
          </div>
        </nav>

        <nav className="nav-users">
          {loremIpsum}
        </nav>
        
      </div>
    );
  }
}

export default ServerShow;