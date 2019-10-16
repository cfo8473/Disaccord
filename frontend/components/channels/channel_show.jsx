import React from "react";
import { withRouter, Redirect } from 'react-router-dom'
import CreateMessageContainer from '../messages/create_message_container'
import MessageIndexItem from '../messages/message_index_item'


class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchChannels();
  }

  //old lifecycle, ask about this
  componentWillUpdate() {
    this.props.updateChannel(this.props.match.params.channelId)
  }


  render() {
    // console.log(this.props.channel)
    // console.log(window.getState().ui.active)
  
  
    const messageList = Object.values(this.props.messages).map((message, idx) => (
      (message.channel_id === parseInt(this.props.channel)) ? (
        <li key={`message-${idx}`}>
          <MessageIndexItem message={message} users={this.props.users}/>
        </li>) : (<div></div>)
    ))
    

    return (
      <div>
        <ul>
          {/* <p className="debug-text">CHANNEL SHOW WORKING!! Currently loading channel</p>
          <p className="debug-text-channel"> {this.props.channel}</p> */}
          {messageList}
        </ul>
        {/* <div className="nav-content-message-bar">
          <CreateMessageContainer />
        </div> */}
      </div>
    )
    

  }

}

export default withRouter(ChannelShow);