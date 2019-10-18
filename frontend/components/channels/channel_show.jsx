import React from "react";
import { withRouter, Redirect } from 'react-router-dom'
import CreateMessageContainer from '../messages/create_message_container'
import MessageIndexItem from '../messages/message_index_item'


class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.updateScroll = this.updateScroll.bind(this)

  }

  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchChannels();
    this.props.updateChannel(this.props.match.params.channelId);
    
  }


  componentWillUpdate() {
    this.props.updateChannel(this.props.match.params.channelId);
    
  }

  updateScroll() {
    let container;
    if (document.getElementsByClassName('nav-content-messages').length >= 1) {
      container = document.getElementsByClassName('nav-content-messages')[0];
      console.log(container.scrollHeight)
      // container.scrollTop + container.clientHeight >= container.scrollHeight
      container.scrollTop = container.scrollHeight
    }
  }


  render() {
    let container;
    if (document.getElementsByClassName('nav-content-messages-block').length >= 1) {
      container = document.getElementsByClassName('nav-content-messages-block')[0];
      container.scrollTop = container.scrollHeight;
    }

    const messageList = Object.values(this.props.messages).map((message, idx) => (
      (message.channel_id === parseInt(this.props.channel)) ? (
        <li key={`message-${message.id}`}>
          <MessageIndexItem message={message} key={`message-${idx}`} users={this.props.users}/>
        </li>) : (<div key={idx}></div>)
    ))
    

    return (
      <div>
        <ul>
          {messageList}

          {/* {this.updateScroll()} */}
        </ul>
      </div>
    )
  }

}

export default withRouter(ChannelShow);