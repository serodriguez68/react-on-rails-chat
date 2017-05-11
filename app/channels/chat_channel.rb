class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'general_chat_room'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
