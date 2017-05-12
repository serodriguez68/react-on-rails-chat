class MessagesController < ApplicationController

  # Rails + Action Cable Chat Room
  # ===========================================================================
  def chat_room
    @messages = Message.all.includes(:user)
    @message = current_user.messages.build
  end

  def create
    @message = current_user.messages.build(message_params)
    if @message.save
      ActionCable.server.broadcast(
        'general_chat_room',
        rendered_message: render(partial: 'messages/message', locals: { message: @message })
      )
    end
  end
  # Rails + Action Cable Chat Room ============================================

  # Rails + Action Cable + React
  # ===========================================================================
  def react_chat_room
    @message = current_user.messages.build
  end

  def api_index
    @messages = Message.all.includes(:user)
    render json: @messages, include: { user:{ only: :email } }
  end

  def react_create
    @message = current_user.messages.build(message_params)
    if @message.save
      ActionCable.server.broadcast(
        'general_chat_room',
        message: @message.as_json.merge({user: {email: @message.user.email}})
      )
    end
  end
  # Rails + Action Cable + React ==============================================

  private
    def message_params
      params.require(:message).permit(:content)
    end
end
