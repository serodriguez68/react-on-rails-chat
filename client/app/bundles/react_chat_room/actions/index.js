import axios from 'axios';
import ReactOnRails from 'react-on-rails';

const API_INDEX_MESSAGES_PATH = "/messages/api_index";
const CREATE_MESSAGES_PATH = '/messages';

export const FETCH_MESSAGES ='fetch_messages';
export const CREATE_MESSAGE = 'create_message';
export const ADD_MESSAGE ='add_message';


export function fetchMessages(){
  const request = axios.get(`${API_INDEX_MESSAGES_PATH}`);
  return {
    type: FETCH_MESSAGES,
    payload: request
  };
}

export function createMessage(values, callback) {
  const request = axios({
    method: 'POST',
    url: CREATE_MESSAGES_PATH,
    responseType: 'json',
    headers: ReactOnRails.authenticityHeaders(),
    data: {message: {...values}}
  }).then(() => callback());
  return {
    type: CREATE_MESSAGE,
    payload: request
  }
}

export function addMessage(message){
  return ({
    type: ADD_MESSAGE,
    payload: message
  });
}
