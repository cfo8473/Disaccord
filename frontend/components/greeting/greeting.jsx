import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
   const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>logout</button>
    </div>) : (
      <header className="main-header">
        <nav className="header-inner">
          <ul className="header-nav-right">
            test
           </ul>
        </nav>
      </header>
    )
    return (
    <header className="Welcome Message">
      <div>
        {display}
      </div>
    </header>
    )
    };