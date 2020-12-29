// export const fetchServerMemberships = (userId) => {
//   return $.ajax({
//     method: "GET",
//     url: `api/users - this is incorrect
//   })

// }

export const fetchMemberships = () => {
  return $.ajax({
    method: "GET",
    url: `/api/memberships`
  })
}

export const fetchMembership = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/memberships/${id}`
  })
}

export const createMembership = membership => {
  return $.ajax({
    method: "POST",
    url: `/api/memberships`,
    data: { membership }
  })
}

export const editMembership = membership => {
  return $.ajax({
    method: "PATCH",
    url: `/api/memberships/${membership.id}`,
    data: { channel }
  })
}

export const deleteMembership = membershipId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/memberships/${membershipId}`
  })
}
