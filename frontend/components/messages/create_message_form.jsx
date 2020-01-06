import React from 'react';
import { withRouter } from 'react-router-dom'

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.messageInfo;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }


  handleSubmit(e) {
    
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      if (this.state.body.length !== 0) {
        this.props.updateChannel(this.props.match.params.channelId);
        
        const message = Object.assign({}, this.state);
        this.props.processForm(message);
      }
      e.target.value = "";
      this.state.body = "";
    }
  }

  render() {
    this.state.channel_id = this.props.channel
    this.state.author_id = this.props.currentUser
    return (
      <form className="nav-content-message-bar">
        <textarea className   = "nav-content-message-box" 
                  onKeyDown   = {this.handleSubmit} 
                  value       = {this.props.body}
                  onChange    = {this.update("body")}
                  placeholder = "Message #channelplaceholder"
                  required>      
        </textarea>
      </form>
    )
  }
}

export default withRouter(MessageForm);