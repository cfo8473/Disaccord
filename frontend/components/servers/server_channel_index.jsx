import React from "react";

class ServerChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.server) {
      let server = this.props.server.id;
    } else {
      let server = (<div></div>
      );
    }
    debugger
    return (
      <div>
        {server}
      </div>
    )

  }

}

export default ServerChannelIndex;