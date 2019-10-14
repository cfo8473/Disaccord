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
    this.onEnterPress = this.onEnterPress.bind(this)
  }

  onEnterPress(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      e.target.value = "";
    }
  }
  // componentDidMount() {
  //   this.props.fetchServer(this.props.match.params.id)
  // }

  // buggy as servers is not being passed through properly
  // need to fix to keep current server saved

  // componentDidUpdate(prevProps) {
  //   debugger
  //   if (prevProps.server.id != this.props.match.params.serverId) {
  //     this.props.fetchServer(this.props.match.params.serverId);
  //   }
  // }

  render() {
    

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
          <ServerIndexContainer />
        </nav>

        <ProtectedRoute path='/servers/:serverId' component={ServerChannelIndexContainer} />
        
        <nav className="nav-content">
          <header className="nav-content-header"># current channel:[test]</header>
          <div className="nav-content-messages">

          {/* <ProtectedRoute path='/channels/:channelId' component={ServerChannelIndexContainer} /> */}
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
        </nav>

        <nav className="nav-users">
          {loremIpsum}
        </nav>
        
      </div>
    );
  }
}

export default ServerShow;