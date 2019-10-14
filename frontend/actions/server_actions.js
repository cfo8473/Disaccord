import * as APIUtil from "../util/server_api_util";

export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const REMOVE_SERVER = "REMOVE_SERVER"

export const fetchServers = () => dispatch => {
  return (
    APIUtil.fetchServers().then(servers => dispatch(receiveServers(servers)))
  );
}

export const fetchServer = id => dispatch => {
  return (
    APIUtil.fetchServer(id).then(server => dispatch(receiveServer(server)))
  )
}

export const createServer = server => dispatch => {
  return (
    APIUtil.createServer(server).then(server => dispatch(receiveServer(server)))
  );
}

export const editServer = server => dispatch => {
  return (
    APIUtil.editServer(server).then(server => dispatch(receiveServer(server)))
  );
}

export const removeServer = serverId => dispatch => {
  return (
    APIUtil.deleteServer(serverId).then(() => dispatch(deleteServer()))
  )
}

const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

const deleteServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
});