@channels.each do |user_channel|
  json.set! user_channel.id do 
   json.partial! "api/channels/channel", channel: user_channel
  end
end

