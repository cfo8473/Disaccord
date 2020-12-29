
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

export const editUser = formData => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${formData.get('user[id]')}`,
    data: formData, contentType: false, processData: false
  })
}

export const deleteUser = userId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}`
  })
}
