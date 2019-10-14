import React from "react";

class ServerChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: this.props.server
    }
      // debugger
  }

  render() {
    let server;
    const serverTitle = (typeof (this.props.server) !== 'undefined' ) ? (
      server = this.props.server.title
    ) : (
      <div></div>
    )
      
    // if (this.state.server) {
    //   let server = this.state.server.id;
    // }
    // debugger
    return (
      <div>
        
        {serverTitle}
      </div>
    )

  }

}

export default ServerChannelIndex;