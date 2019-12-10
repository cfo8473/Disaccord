import React from "react";
import { Link } from 'react-router-dom'
import { faDog, faLanguage, faKiwiBird, faDove, faCat} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const display = !this.props.currentUser ? (
      <div className="splashPage">
        <header className="main-header">
          <nav className="header-inner">
            <div className="header-logo">
              <FontAwesomeIcon icon={faDog} /> DISACCORD
            </div>
            <ul className="header-nav-center">
              
              <a href="https://github.com/cfo8473">Github</a>
            </ul>

            <div className="header-icons">
              <FontAwesomeIcon icon={faKiwiBird} /> - 
              <FontAwesomeIcon icon={faDove} /> - 
              <FontAwesomeIcon icon={faCat} />
            </div>
            <ul className="header-nav-right"
            >
              <Link className="login-button" to="/login">Log In</Link>
            </ul> 
              <div className="header-language"><FontAwesomeIcon icon={faLanguage} /></div>
          </nav>
        </header>
        <div className="greeting-text-padding">
          <h1 className="greeting-header-text">It's time to ditch Skype and Teamspeak.</h1>
          <h2 className="greeting-header-text">Also ditch this clone for that matter...</h2> 
          <p className="greeting-text-use">Text chat for gamers that's free, secure, and works on both your desktop and your...laptop.</p>
          <p className="greeting-text-use">Stop paying for TeamSpeak servers and hassling with Skype because nobody even uses those anymore. Simplify your life.</p>
        </div>
        <div className="splashBackground"></div>
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