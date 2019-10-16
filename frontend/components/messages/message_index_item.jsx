import React from 'react'
import { Link } from "react-router-dom"
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
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
    console.log(date)
    return (
      <div>
        <div >
          <div className="messages-username">
            {this.props.users[this.props.message.author_id].username} <span className="login-text">{this.props.message.created_at}</span>
          </div>
          <div className="messages-body">
            {this.props.message.body}
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(MessageIndexItem);