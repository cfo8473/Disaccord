import React from "react";
import { Link } from 'react-router-dom'
import { faDog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const display = !this.props.currentUser ? (
      <div>
        <header className="main-header">
          <nav className="header-inner">
            <div className="header-logo">
              <FontAwesomeIcon icon={faDog} /> Disaccord
            </div>
            <ul className="header-nav-center">[ placeholder ]</ul>
            <ul className="header-nav-right">
              <Link className="login-button" to="/login">Log In</Link>
            </ul>
          </nav>
        </header>
      </div>
    ) : ( <div></div> )

    return (
      <div>
        {display}
        
      </div>
    )
  };
}

export default Greeting;