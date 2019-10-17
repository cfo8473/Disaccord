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
    if (this.props.users[this.props.message.author_id]){
    if (this.props.users[this.props.message.author_id].photo) {
      console.log("Found")
      // return (<div className="messages-icon" style={{
      //   backgroundImage: `url('${this.props.users[this.props.message.author_id].photo}')`
      // }}>

      return (<div className="messages-icon">
        <img className="messages-icon-picture" src={this.props.users[this.props.message.author_id].photo}/>
      </div>)
    } } else {
      return(
        <div className="messages-icon">
          <button >
            <FontAwesomeIcon icon={faDog} />
          </button>
        </div>
      )
    }
  }

  messageContent() {
    if (this.props.users) {
      if (this.props.users[this.props.message.author_id]) {
        return (
          <div>
            < span className = "messages-username-name" > 
              { this.props.users[this.props.message.author_id].username }
            </span >
             <span className="login-text">{this.props.message.created_at}</span>
          </div>
        )
      } else { 
        <div></div>
      }
    }

  }

  render() {
    // debugger
    // console.log(this.props)
    let date = new Date(this.props.message.created_at)
    // console.log(date)
    
    

    return (
      <div>
        <div className="message-wrap">
          
            <div className="messages-block">
              {this.userIcon()}
            <h3 className="messages-username">
              {this.messageContent()}
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