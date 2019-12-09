import React from "react";
import { faAddressCard, faDog, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChannelIndexItem from './channel_index_item'
import { withRouter, Redirect } from 'react-router-dom'
import Collapsible from 'react-collapsible';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: this.props.server
    }
    this.userIcon = this.userIcon.bind(this)

  }


  
  
  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId);
    this.props.fetchChannels(),
    this.props.fetchServers(),
    this.props.fetchMessages(),
    this.props.updateServer(this.props.match.params.serverId)

  }

  componentDidUpdate(prevProps) {
  
    if (prevProps.match.params.serverId != this.props.match.params.serverId) {
      this.props.updateServer(this.props.match.params.serverId)
    }
  }

  userIcon() {
    if (this.props.users[this.props.currentUser.id] && this.props.users[this.props.currentUser.id].photo) {
     {
        return (
        <div className="messages-icon">
          <img className="messages-icon-picture" src={this.props.users[this.props.currentUser.id].photo} />
        </div>)
      }
    } else {
      return (
        // <div className="messages-icon">
        //   <img className="messages-icon-picture" src="https://icon-icons.com/icons2/1476/PNG/64/discord_101785.png" />
        // </div>
        <div className="messages-icon">
          <div className="messages-icon-picture-default"
          />

        </div>
        
      )
    }
  }


  render() {
    let pathName = this.props.location.pathname;

    let channels = this.props.channels;
    const channelList = Object.values(channels).map((channel, idx) => (
      (channel.server_id === this.props.server.id) ? (
      <li key={`channel-${channel.id}-${this.props.server.id}`}>
         <ChannelIndexItem channel={channel}/>
      </li> ) : ( <div key={idx}></div>)
    ))



    let server;
    if (!this.props.server){
      <div></div>
    } else {
      server = this.props.server;
      if (pathName === `/servers/${server.id}` ) {
        return <Redirect to={`${pathName}/${server.channels[0].id}`} />
      }
    }
    

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

  
    const preview = this.props.photo ? <img className="settings-icon-preview" src={this.props.photo} /> : null;
      
    const userBox = (

      
      <div className="current-user-block">
        {/* <div className="username-icon"><FontAwesomeIcon icon={faAddressCard} /></div> */}
        <div className="username-icon">{this.userIcon()}</div>
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
      <div></div>
    ) } else {
      return (
          <nav className="nav-channels">
            <header className="nav-channels-header">
              {this.props.server.title}

            <button className="debug-button tooltips " onClick={this.props.openServerModalEdit}>
              <FontAwesomeIcon icon={faCog}/>
              <span>Edit Server</span>
          </button>
            </header>
            
          
            <div className="nav-channels-list">

              <div className="channel-text-header-block">

              <Collapsible open={Boolean(true)} style="div" triggerWhenOpen="▼ TEXT CHANNELS"
                transitionTime={parseInt(50)} className="channel-text-title" trigger="► TEXT CHANNELS">
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
          
          
            {userBox}
          </nav>
      )
     }

  }

}

export default withRouter(ChannelIndex);