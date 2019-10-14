import React from 'react'
import { Link } from "react-router-dom"
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServerChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to={`/channels/${this.props.channel.id}`}>
          
          <div className="channel-title">
            <span className="channel-title-pound"><FontAwesomeIcon icon={faHashtag} /></span>{this.props.channel.title}
          </div>
        </Link>
      </div>
    )
  }

}

export default ServerChannelIndexItem;