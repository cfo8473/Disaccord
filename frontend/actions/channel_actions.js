import * as APIChannelUtil from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"

export const fetchChannels = () => dispatch => {
  return APIChannelUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)));
}

export const fetchChannel = id => dispatch => {
  return APIChannelUtil
    .fetchChannel(id).then(channel => dispatch(receiveChannel(channel)));
};

export const createChannel = channel => dispatch => {
  return APIChannelUtil
    .createChannel(channel).then(channel => {  
      dispatch(receiveChannel(channel));
      return channel;
    });
};

export const editChannel = channel => dispatch => {
  return APIChannelUtil
    .editChannel(channel).then(channel => dispatch(receiveChannel(channel)));
};

export const removeChannel = channelId => dispatch => {
  return APIChannelUtil
    .deleteChannel(channelId).then(() => dispatch(deleteChannel()));
}

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const deleteChannel = channelId => ({
  type: REMOVE_CHANNEL,
  channelId
});