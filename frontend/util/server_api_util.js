//fetchServers params empty until joins table are implemented
//will need to fetch only servers that belong in users server array
export const fetchServers = () => {
  return $.ajax({
    method: "GET",
    url: `api/servers`
  })
}

export const fetchServer = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/servers/${id}`
  })
}

export const createServer = server => {
  return $.ajax({
    method: "POST",
    url: `/api/servers`,
    data: {server}
  })
}

export const editServer = server => {
  return $.ajax({
    method: "PATCH",
    url: `/api/servers/${server.id}/edit`,
    data: {server}
  })
}

export const deleteServer = serverId => {
  return $.ajax({
      method: "DELETE",
      url: `/api/servers/${serverId}`
    })
}
