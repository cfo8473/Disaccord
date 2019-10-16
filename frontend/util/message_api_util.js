
export const fetchMessages = () => {
  return $.ajax({
    method: "GET",
    url: `/api/messages`
  })
}

export const fetchMessage = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/messages/${id}`
  })
}

export const createMessage = message => {
  return $.ajax({
    method: "POST",
    url: `/api/messages`,
    data: { message }
  })
}

export const editMessage = message => {
  return $.ajax({
    method: "PATCH",
    url: `/api/messages/${message.id}`,
    data: { message }
  })
}

export const deleteMessage = messageId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/messages/${messageId}`
  })
}
