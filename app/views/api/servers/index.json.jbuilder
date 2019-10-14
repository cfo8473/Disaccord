@servers.each do |user_server|
  json.partial! "api/servers/server", server: user_server
end

