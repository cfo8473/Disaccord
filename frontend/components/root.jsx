import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import App from './App'
import WebSocketProvider, { WebSocketContext } from '../websockets/webs';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <WebSocketProvider>
        <App />
      </WebSocketProvider>
    </HashRouter>
  </Provider>
);

