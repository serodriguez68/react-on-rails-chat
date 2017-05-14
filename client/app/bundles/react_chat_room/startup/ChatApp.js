// Boilerplate Library Setup
import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';


// Project Specific Import
import MessageBox from '../containers/message_box';

export default (_props, _railsContext) => {
  const store = ReactOnRails.getStore('messagesStore');

  return (
    <Provider store={store}>
      <MessageBox />
    </Provider>
  );
};
