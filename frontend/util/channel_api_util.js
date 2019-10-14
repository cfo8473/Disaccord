
export const fetchChannels = () => {
  return $.ajax({
    method: "GET",
    url: `/api/servers/:serverId/`
  })
}

export const fetchChannel = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/servers/:serverId/${id}`
  })
}

export const createChannel = channel => {
  return $.ajax({
    method: "POST",
    url: `/api/servers/:serverId`,
    data: {channel}
  })
}

export const editChannel = channel => {
  return $.ajax({
    method: "PATCH",
    url: `/api/servers/:serverId/${channel.id}/edit`,
    data: {channel}
  })
}

export const deleteChannel = channelId => {
  return $.ajax({
      method: "DELETE",
      url: `/api/servers/:serverId/${channelId}`
    })
}
