import React from "react";
import { Link } from 'react-router-dom'
import { faDog, faLanguage, faKiwiBird, faDove, faCat} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import svgs from "../../../app/assets/images/svgs";
import imgs from "./splash_svgs";

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
              <FontAwesomeIcon icon={faDog} /> disaccord
            </div>
            <ul className="header-nav-center">
              <a className="splash-portfolio-link" href="https://cfong.io">
                Portfolio
              </a>
              <a
                className="splash-portfolio-link"
                href="https://github.com/cfo8473"
              >
                Github
              </a>
              <a
                className="splash-portfolio-link"
                href="https://www.linkedin.com/in/chris-fong-33b6b3197/"
              >
                LinkedIn
              </a>
              <a
                className="splash-portfolio-link"
                href="https://angel.co/chris-fong-7"
              >
                AngelList
              </a>
            </ul>

            {/* <div className="header-icons">
              <FontAwesomeIcon icon={faKiwiBird} /> - 
              <FontAwesomeIcon icon={faDove} /> - 
              <FontAwesomeIcon icon={faCat} />
            </div> */}
            <ul className="header-nav-right">
              <Link className="login-button" to="/login">
                Log In
              </Link>
            </ul>
            {/* <div className="header-language"><FontAwesomeIcon icon={faLanguage} /></div> */}
          </nav>
        </header>
        <div className="greeting-text-padding">
          <h1 className="greeting-header-text">Welcome to Disaccord!</h1>
          <h2 className="greeting-header-text">
            A full stack messaging app inspired by Discord
          </h2>
          <p className="greeting-text-use">
            Single-page application designed for chat messaging using the
            following technologies:
          </p>
          <p className="greeting-text-use">
            Ruby, Rails, React, JavaScript, Node, Amazon S3 and PostGreSQL
          </p>
          <p className="greeting-text-use">
            Please log in using the button on the top right. Demo Login is
            available.
          </p>
        </div>
        {/* <div className="splashBackground"></div> */}{" "}
        <div className="splash-imgs">
          <div className="shadow"></div>
          {imgs.triangle}
          {imgs.triangle}
          {imgs.triangle}
          {imgs.dot}
          {imgs.dot}
          {imgs.dot}
          {imgs.dot}
          {imgs.dot}
          {imgs.circle}
          {imgs.circle}
          {imgs.circle}
          {imgs.square}
          {imgs.square}
          {imgs.square}
          {imgs.x}
          {imgs.x}
          {imgs.x}
          {imgs.potion}
          {imgs.bomb}
          {imgs.coin}
          {imgs.coin}
          {imgs.cartridge}
          {imgs.block}
          {imgs.desktop}
          {/* <div className="desktop"></div>  */}
          {imgs.android}
          {imgs.iphone}
          {imgs.controller}
          {imgs.laptop}
          {imgs.headphones}
        </div>
      </div>
    ) : (
      <div></div>
    );

    return (
      <div>
        {display}
        
      </div>
    )
  };
}

export default Greeting;