class MessagesController < ApplicationController
  include ReactOnRails::Controller

  # Rails + Action Cable + React
  # ===========================================================================
  def react_chat_room
    @message = current_user.messages.build
    messages = Message.all.includes(:user)
    @messages_props = messages.map{ |m| [m.id, m.as_json.merge({user: {email: m.user.email}})]  }.to_h
  end

  def api_index
    @messages = Message.all.includes(:user)
    render json: @messages, include: { user:{ only: :email } }
  end

  def create
    @message = current_user.messages.build(message_params)
    if @message.save
      ActionCable.server.broadcast(
        'general_chat_room',
        message: @message.as_json.merge({user: {email: @message.user.email}})
      )
      head :ok
    end
  end
  # Rails + Action Cable + React ==============================================

  private
    def message_params
      params.require(:message).permit(:content)
    end
end
