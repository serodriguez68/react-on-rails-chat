import axios from 'axios';

const API_INDEX_MESSAGES_PATH = "/messages/api_index";

export const FETCH_MESSAGES ='fetch_messages';
export const ADD_MESSAGE ='add_message';

export function fetchMessages(){
  const request = axios.get(`${API_INDEX_MESSAGES_PATH}`);
  return {
    type: FETCH_MESSAGES,
    payload: request
  };
}

export function addMessage(message){
  return ({
    type: ADD_MESSAGE,
    payload: message
  });
}
