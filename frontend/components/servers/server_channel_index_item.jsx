import React from 'react'
import { Link } from "react-router-dom"
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServerChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // debugger
    return (
      <div>
        <Link to={`/servers/${this.props.channel.server_id}/${this.props.channel.id}`}>
          {/* no link, just rerender in same nav maybe extend? */}
          {/* /server/serverid/channelid
          reference actual channel */}
          
          <div className="channel-title">
            <span className="channel-title-pound"><FontAwesomeIcon icon={faHashtag} /></span>{this.props.channel.title}
          </div>
        </Link>
      </div>
    )
  }

}

export default ServerChannelIndexItem;