import React from 'react'
import { Link } from "react-router-dom"
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {withRouter} from 'react-router-dom'

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let channelId = this.props.location.pathname.split("/")[3];

    if (this.props.channel.id === parseInt(channelId)) {
      return (
        <div key={this.props.channel.id}>
          <Link to={`/servers/${this.props.channel.server_id}/${this.props.channel.id}`}>
            <div className="current-channel-title">
              <span className="channel-title-pound">
                <FontAwesomeIcon icon={faHashtag} />
              </span>
              {this.props.channel.title}
            </div>
          </Link>
        </div>
      )
    } else {
      return (
        <div key={this.props.channel.id}>
          <Link to={`/servers/${this.props.channel.server_id}/${this.props.channel.id}`}>
            <div className="channel-title">
              <span className="channel-title-pound">
                <FontAwesomeIcon icon={faHashtag} />
              </span>
              {this.props.channel.title}
            </div>
          </Link>
        </div>
      )
    }
  }
}

export default withRouter(ChannelIndexItem);