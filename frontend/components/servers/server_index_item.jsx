import React from 'react'
import { Link, withRouter } from "react-router-dom"


class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  componentWillUnmount() {
    this.state.isHovering = false;
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  pillAnimation() {
    if (this.state.isHovering) {
      return (
        <div>
          <span className="nav-servers-pill-select"></span>
        </div>
      )
    } else {
      return (<div/>)
    }
  }

  render() {
    let serverId = this.props.location.pathname.split("/")[2];
    if (this.props.server.id === parseInt(serverId)) {
      return (
        <div>
          <span className="nav-servers-pill"></span>
          <Link to={`/servers/${this.props.server.id}`}>
            <button
              className="nav-servers-current-button tooltips"
              onClick={this.props.openServerModal}
            >
              <p className="nav-servers-button-spacer">
                {this.props.server.title.slice(0, 1)}
              </p>
              <span>{this.props.server.title}</span>
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <Link to={`/servers/${this.props.server.id}`}>
            <button
              className="nav-servers-button tooltips"
              onClick={this.props.openServerModal}
            >
              <p className="nav-servers-button-spacer">
                {this.props.server.title.slice(0, 1)}
              </p>
              <span>{this.props.server.title}</span>
            </button>
          </Link>
        </div>
      );
    }
  }
}

export default withRouter(ServerIndexItem);