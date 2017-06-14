import { createStore, applyMiddleware } from 'redux';
import reducers, { initialStates } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise'; //import redux-promise middleware


export default (props, railsContext) => {
  const initialMessages = props;
  const initialState = {
      messages: { ...initialStates.messagesState, ...initialMessages},
      railsContext
  };
  const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(promise))(createStore);
  return createStoreWithMiddleware(reducers, initialState);
};
