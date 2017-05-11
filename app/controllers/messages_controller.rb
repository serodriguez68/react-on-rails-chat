class MessagesController < ApplicationController

  def chat_room
    @messages = Message.all.includes(:user)
    @message = current_user.messages.build
  end

  def create
    @message = current_user.messages.build(message_params)
    if @message.save
      render 'create'
    end
  end

  private
    def message_params
      params.require(:message).permit(:content)
    end
end
