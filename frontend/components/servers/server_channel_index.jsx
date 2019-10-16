import React from "react";
import { faAddressCard, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ServerChannelIndexItem from './server_channel_index_item'
import { withRouter } from 'react-router-dom'
import Collapsible from 'react-collapsible';


class ServerChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: this.props.server
    }

  }


  
  
  componentDidMount() {
    // debugger
    this.props.fetchServer(this.props.match.params.serverId);
    this.props.fetchChannels(),
    this.props.fetchServers(),
    this.props.updateServer(this.props.match.params.serverId)
    // this.props.updateChannel(this.props.match.params)

  }

  componentDidUpdate(prevProps) {
  
    if (prevProps.match.params.serverId != this.props.match.params.serverId) {
      this.props.updateServer(this.props.match.params.serverId)
    }
  }


  render() {
    let channels = this.props.channels;
    const channelList = Object.values(channels).map((channel, idx) => (
      (channel.server_id === this.props.server.id) ? (
      <li key={`channel-${channel.id}`}>
         <ServerChannelIndexItem channel={channel}/>
      </li> ) : ( <div></div>)
    ))

    let server;
    let serverId;
    if (!this.props.server) {
      <div></div>
    } else {
      serverId = this.props.server.id;
    }
    const addChannel = (
      
      <div className="channel-plus" onClick={() => dispatch(this.props.openModal("createChannel", serverId))}>
        +
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

              <div className="channel-text-header-block">

                <Collapsible open={Boolean(true)} style="div" triggerWhenOpen="↓ TEXT CHANNELS"
                    transitionTime={parseInt(10)} className="channel-text-title" trigger="> TEXT CHANNELS">
                  <ul>
                    {channelList}
                  </ul>
                </Collapsible>
                
                <a className="channel-add-button tooltips">
                  {addChannel}
                  <span>Create Channel</span>
                
                </a>

              </div>

              
            </div>

            <br></br>
          <button className="debug-button " onClick={this.props.openServerModalEdit}>
            EDIT SERVER
          </button>

            {userBox}
          </nav>
      )
     }

  }

}

export default withRouter(ServerChannelIndex);