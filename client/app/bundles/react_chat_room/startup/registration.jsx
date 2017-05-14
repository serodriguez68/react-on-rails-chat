import ReactOnRails from 'react-on-rails';
import ChatApp from './ChatApp';
import messagesStore from '../store/messagesStore'

ReactOnRails.register({
  ChatApp,
});

ReactOnRails.registerStore({
  messagesStore,
});
