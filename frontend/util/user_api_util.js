
export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: `/api/users`
  })
}

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
}

export const createUser = user => {
  return $.ajax({
    method: "POST",
    url: `/api/users`,
    data: { user }
  })
}

export const editUser = user => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}/edit`,
    data: { user }
  })
}

export const deleteUser = userId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}`
  })
}
