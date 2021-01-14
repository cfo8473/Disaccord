import * as APIMessageUtil from "../util/message_api_util";
import axios from 'axios';
export const API_BASE = "http://localhost:5000"
export const WS_BASE = "http://localhost:5000"

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"
export const UPDATE_CHAT = "UPDATE_CHAT"

export const updateChatLog = () => update => {
    return {
        type: UPDATE_CHAT_LOG,
        update
    }
}

export const fetchMessages = () => dispatch => {
  return APIMessageUtil.fetchMessages()
    .then(messages => dispatch(receiveMessages(messages)));
}

export const fetchMessage = id => dispatch => {
  return APIMessageUtil
    .fetchMessage(id).then(message => dispatch(receiveMessage(message)));
};

export const createMessage = message => dispatch => {
  return APIMessageUtil
    .createMessage(message).then(message => dispatch(receiveMessage(message)));
};

export const editMessage = message => dispatch => {
  return APIMessageUtil
    .editMessage(message).then(message => dispatch(receiveMessage(message)));
};

export const removeMessage = messageId => dispatch => {
  return APIMessageUtil
    .deleteMessage(messageId).then(() => dispatch(deleteMessage()));
}

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const deleteMessage = messageId => ({
  type: REMOVE_MESSAGE,
  messageId
});