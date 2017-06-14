// Boilerplate Library Setup
import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';

// Project Specific Import
import MessageBox from '../containers/message_box';
import NewMessage from '../containers/new_message';

export default (_props, _railsContext) => {
  const store = ReactOnRails.getStore('messagesStore');

  return (
    <Provider store={store}>
      <div>
        <MessageBox />
        <NewMessage />
      </div>
    </Provider>
  );
};
