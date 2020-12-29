@messages.each do |user_message|
  json.set! user_message.id do 
   json.partial! 'api/messages/message', message: user_message
  end
end

