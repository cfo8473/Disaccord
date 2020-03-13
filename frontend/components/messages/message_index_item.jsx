import React from 'react'
import { Link } from "react-router-dom"
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.userIcon = this.userIcon.bind(this)
    this.messageContent = this.messageContent.bind(this)
  }

  userIcon(){
    if (this.props.users[this.props.message.author_id] && this.props.users[this.props.message.author_id].photo){
      return (<div className="messages-icon">
        <img className="messages-icon-picture" src={this.props.users[this.props.message.author_id].photo}/>
      </div>)
      } else {
        return(
          <div className="messages-icon">
            <div className="messages-icon-picture-default"
            />
          </div>
        )
      } 
  }

  messageContent() {
    let message = this.props.message
    if (this.props.users) {
      if (this.props.users[this.props.message.author_id]) {
        return (
          <div>
            < span className = "messages-username-name" > 
              { this.props.users[this.props.message.author_id].username }
            </span >
            <span className="timestamp-text">{`${message.created_at.split('T')[0]} @ ${message.created_at.split('T')[1].slice(0, 5)}`}</span>
          </div>
        )
      } else { 
        <div></div>
      }
    }
  }

  render() {
    return (
      <div>
        <div className="message-wrap">
            <div className="messages-block">
            <div className="message-icon-block">
              {this.userIcon()}
            </div>
            <div className="message-content">
              <h3 className="messages-username">
                {this.messageContent()}
                </h3>
              <div className="messages-body">
                {this.props.message.body}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MessageIndexItem);