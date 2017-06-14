import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionCable from 'actioncable';
import { fetchMessages, addMessage } from '../actions/index';


class MessageBox extends Component {

  constructor() {
    super();
    this.cable = null;
  }

  componentDidMount(){
    this.props.fetchMessages();
    this.subscribeChannel();
  }

  componentDidUpdate(){
    this.scroll_to_bottom();
  }

  componentWillUnmount() {
    this.cable.subscriptions.remove({ channel: 'ChatChannel' });
  }

  subscribeChannel() {

    const { addMessage } = this.props;
    const protocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
    const cableUrl = `${protocol}${window.location.hostname}:${window.location.port}/cable`;
    this.cable = ActionCable.createConsumer(cableUrl);

    this.cable.subscriptions.create('ChatChannel', {
      connected: () => {
        console.log('connected');
      },
      disconnected: () => {
        console.log('disconnected');
      },
      received: (message) => {
        addMessage(message);
      },
    });
  }

  render_messages(){
    return _.map(this.props.messages, message => {
      return(
        <div key={message.id} id={`message-${message.id}`}>
          <strong>{message.user.email}: </strong>
          <div>{message.content}</div>
          <div><small>{message.created_at}</small></div>
          <br/>
        </div>
      );
    })
  }

  scroll_to_bottom(){
    $('html, body').animate({scrollTop:$("#message-count").position().top}, 'slow');
  }

  render() {
    return (
      <div>
        <h1>Powered by React on Rails + ActionCable + Redux</h1>
        <div className="callout" id='messages'>
          {this.render_messages()}
          <div id="message-count">
            <small>
              <strong>This conversation has {_.size(this.props.messages)} messages</strong>
            </small>
          </div>
        </div>
      </div>
    );
  }
}


function mapSateToProps(state){
  return { messages: state.messages, railsContext: state.railsContext };
}

export default connect(mapSateToProps, {fetchMessages, addMessage})(MessageBox);
