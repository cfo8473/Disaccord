@servers.each do |user_server|
  json.set! user_server.id do 
   json.partial! "api/servers/server", server: user_server
  end
end

