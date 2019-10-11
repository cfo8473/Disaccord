@servers.each do |user_server|
  json.extract! user_server.server, :id, :title, :admin_id
end