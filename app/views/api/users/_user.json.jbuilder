
json.extract! user, :username, :id, :email, :owned_servers, 
                    :userRoles
json.joinedServerIds user.joined_server_ids # populate with memberships later? maybe when logging in
json.joinedChannelIds user.joined_channel_ids # same as above

