import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import messagesReducer,  { initialState as messagesState } from './reducer_messages';
import railsContextReducer, { initialState as railsContextState } from './reducer_rails_context';

const rootReducer = combineReducers({
  messages: messagesReducer,
  form: formReducer,
  railsContext: railsContextReducer
});

export const initialStates = {
  messagesState,
  railsContextState
};

export default rootReducer;
