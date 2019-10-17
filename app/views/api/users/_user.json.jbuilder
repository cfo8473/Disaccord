
json.extract! user, :username, :id, :email, :owned_servers, 
                    :userRoles
# json.photo_url (user.photo.nil?) ? "" : url_for(user.photo)
# if user.photo.attached?
#   json.photo url_for(user.photo)
# end
json.joinedServerIds user.joined_server_ids # populate with memberships later? maybe when logging in
json.joinedChannelIds user.joined_channel_ids # same as above

