class MessagesController < ApplicationController

  def chat_room
    @messages = Message.all.includes(:user)
    @message = current_user.messages.build
  end

  def new
    message = current_user.messages.build(message_params)
    if message.save
      render message: message
    end
  end

  private
    def message_params
      params.require(:message).permit(:content)
    end
end
