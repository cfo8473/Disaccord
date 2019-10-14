import React from "react";

class ServerChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

  let server = this.props.server.id;
    return (
      <div>
        {server}
      </div>
    )

  }

}

export default ServerChannelIndex;