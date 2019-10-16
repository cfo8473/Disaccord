import React from 'react'
import { Link } from "react-router-dom"
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // debugger
    // console.log(this.props)
    let date = new Date(this.props.message.created_at)
    // console.log(date)
    return (
      <div>
        <div className="message-wrap">
          <div className="messages-icon">
            <button >
              <FontAwesomeIcon icon={faDog} />
            </button>
          </div>
            <div className="messages-block">
              
            <h3 className="messages-username">
              <span className="messages-username-name">{this.props.users[this.props.message.author_id].username}</span> <span className="login-text">{this.props.message.created_at}</span>
            </h3>
            <div className="messages-body">
              {this.props.message.body}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(MessageIndexItem);