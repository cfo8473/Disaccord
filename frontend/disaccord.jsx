import React from 'react';
import ReactDom from 'React-dom';
import {login, logout, signup} from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root'

window.addEventListener("DOMContentLoaded", () => {
  let rootEl = document.getElementById("root"); 

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUser: {id: window.currentUser.id, username: window.currentUser.username }}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  ReactDom.render(<Root store={store} />, rootEl)
});

