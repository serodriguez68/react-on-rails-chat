import _ from 'lodash';
import { FETCH_MESSAGES, CREATE_MESSAGE, ADD_MESSAGE } from '../actions/index';


export const initialState = { };

export default function ( state=initialState, action ) {
  switch(action.type){
    case FETCH_MESSAGES:
      return _.mapKeys(action.payload.data, 'id');

    case CREATE_MESSAGE:
      return state;

    case ADD_MESSAGE:
      return { ...state, [action.payload.message.id]: action.payload.message };

    default:
      return state;
  }
}
