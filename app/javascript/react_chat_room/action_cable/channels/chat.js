import { store } from '../../index';
import { Cable } from '../cable.js.erb';
import { addMessage } from '../../actions/index.js.erb';

Cable.subscriptions.create("ChatChannel", {
  connected() {},
    // Called when the subscription is ready for use on the server

  disconnected() {},
    // Called when the subscription has been terminated by the server

  received(message) {
    // Called when there's incoming data on the websocket for this channel
    return store.dispatch(addMessage(message));

  }
}
);
