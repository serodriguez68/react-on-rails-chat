// Boilerplate Library Setup
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise'; //import redux-promise middleware
import reducers from './reducers';

// Project Specific Import
import MessageBox from './containers/message_box';

// Set-up Middleware
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(promise))(createStore);
export const store = createStoreWithMiddleware(reducers);

// Inject root of this app
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <MessageBox />
    </Provider>
    , document.querySelector('#react_chat_room'));
})
