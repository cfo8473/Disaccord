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

  componentWillUpdate() {
    this.props.updateChannel(this.props.match.params.channelId);
    
  }

  updateScroll() {
    let element;
    if (document.getElementsByClassName(".nav-content-messages")[0]) {
      element = document.getElementById("div");
    }
    element.scrollTop = element.scrollHeight;
  }


  render() {
    const messageList = Object.values(this.props.messages).map((message, idx) => (
      (message.channel_id === parseInt(this.props.channel)) ? (
        <li key={`message-${message.id}`}>
          <MessageIndexItem message={message} key={`message-${idx}`} users={this.props.users}/>
        </li>) : (<div></div>)
    ))
    

    return (
      <div>
        <ul>
          {messageList}
        </ul>
      </div>
    )
  }

}

export default withRouter(ChannelShow);