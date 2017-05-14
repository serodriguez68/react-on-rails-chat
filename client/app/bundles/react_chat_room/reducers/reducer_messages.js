import _ from 'lodash';
import { FETCH_MESSAGES, ADD_MESSAGE } from '../actions/index';


export const initialState = {
  1: {
    content: 'initial state',
    user_id: '99',
    user: { email: 'fake@news.com' }
  }
};

export default function ( state=initialState, action ) {
  switch(action.type){
    case FETCH_MESSAGES:
      return _.mapKeys(action.payload.data, 'id');

    case ADD_MESSAGE:
      return { ...state, [action.payload.message.id]: action.payload.message };

    default:
      return state;
  }
}
