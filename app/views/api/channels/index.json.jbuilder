@channels.each do |user_channel|
  json.set! user_channel.id do 
   json.partial! "api/servers/:serverId/", channel: user_channel
  end
end

