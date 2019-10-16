@messages.each do |user_message|
  json.set! user_message.id do 
   json.partial! 'api/channels/channel/membership', membership: @membership
  end
end

# need to figure it out for poly assoc (channels) as well

