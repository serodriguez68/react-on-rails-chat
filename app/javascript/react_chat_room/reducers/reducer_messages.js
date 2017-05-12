import _ from 'lodash';
import { FETCH_MESSAGES, ADD_MESSAGE } from '../actions/index.js.erb';

export default function ( state={}, action ) {
  switch(action.type){
    case FETCH_MESSAGES:
      return _.mapKeys(action.payload.data, 'id');

    case ADD_MESSAGE:
      return { ...state, [action.payload.message.id]: action.payload.message };

    default:
      return state;
  }
}
