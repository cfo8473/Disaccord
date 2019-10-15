import React from 'react';

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
    return (
      <div className="modal-createServer">
        <p className="modal-createServerGreet">CREATE YOUR SERVER</p>
        <p className="modal-createServerGreetText">By creating a server, you will have access to text chat to use amongst your friends.</p>
        <form className="modal-createServerInput" onSubmit={this.handleSubmit}>
          <label className="modal-createServerTitle">SERVER NAME</label>
          <input className="modal-createServerTitleInput" type="text" value={this.state.title} onChange={this.update("title")}/>
          <input className="modal-createServerButton" type="submit" value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default ServerForm;