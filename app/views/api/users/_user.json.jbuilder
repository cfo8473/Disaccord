
  json.extract! user, :username, :id, :email
  json.joinedServerIds [] # populate with memberships later? maybe when logging in
  json.joinedChannelIds [] # same as above
