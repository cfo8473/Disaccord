

export const selectJoinedServers = (state, currentUser) => 
    currentUser.joinedServerIds.map(serverId => 
      state.entities.server[serverId])

