import React from "react";
import Modal from '../modal/modal';
import { Link } from 'react-router-dom'
import { AuthRoute } from '../../util/route_util'
import { faAddressCard, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const addServer = (
      <div>
        <button className="nav-servers-button " onClick={this.props.openServerModal}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        
      </div>
    )

    //probably won't implement any time soon but a nice placeholder
    // const searchServer = (
    //   <div className="nav-servers-button ">
    //     <FontAwesomeIcon icon={faSearch} />
    //   </div>
    // )

    const userBox = (
      <div className="current-user-block">
        <div className="username-icon"><FontAwesomeIcon icon={faAddressCard} /></div>

        <div className="username-box">
          <div className="username-text">{this.props.currentUser.username}</div>

          <div className="username-id">#{this.props.currentUser.id}</div>
        </div>
        
        {this.props.openSettings}
      </div>)

      return (
        <div className="navbar">
          <nav className="nav-servers">
            {addServer}
            {/* {searchServer} */}
          </nav>
          <nav className="nav-channels">
            <header className="nav-channels-header">
              Current Channel:[test]
            </header>
            <div className="nav-channels-list">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>

            {userBox}
          </nav>
                      
          <nav className="nav-content">
            <header className="nav-content-header">
                # current channel:[test]
            </header>

            <div className="nav-content-messages">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </div>

            
          </nav>
          <nav className="nav-users">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </nav>
          
        </div>
      );
    }
}

export default ServerShow;