export const RECEIVE_ACTIVE_SERVER = "RECEIVE_ACTIVE_SERVER"
export const RECEIVE_ACTIVE_CHANNEL = "RECEIVE_ACTIVE_CHANNEL"

export const updateServer = server => {
  return {
    type: RECEIVE_ACTIVE_SERVER,
    server
  }
}

export const updateChannel = channel => {
  return {
    type: RECEIVE_ACTIVE_CHANNEL,
    channel
  }
}