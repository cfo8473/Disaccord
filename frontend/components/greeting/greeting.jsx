import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
   const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>logout</button>
    </div>) : (
      <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </div>
    )
    return (
    <header className="Welcome Message">
      <div>
        {display}
      </div>
    </header>
    )
    };