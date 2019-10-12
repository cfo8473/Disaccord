import React from 'react';
import { Link } from 'react-router-dom';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.serverInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    this.props.processForm(server);
    this.props.closeModal() ;
  }

  render() {
    // debugger
    return (
      <div className="modal-createChannel">
       

          <p className="modal-createChannelGreet">CREATE YOUR SERVER</p>
          <p className="modal-createChannelGreetText">By creating a server, you will have access to text chat to use amongst your friends.</p>
          <form className="modal-createChannelInput" onSubmit={this.handleSubmit}>
            <label className="modal-createChannelTitle">SERVER NAME</label>
            <input className="modal-createChannelTitleInput" type="text" value={this.state.title} onChange={this.update("title")}/>

            <input className="modal-createChannelButton" type="submit" value="Create"/>


          </form>

      </div>
    )
  }
}

export default ServerForm;