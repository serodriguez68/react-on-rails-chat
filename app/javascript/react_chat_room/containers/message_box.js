import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index.js.erb';

class MessageBox extends Component {
  componentDidMount(){
    this.props.fetchMessages();
  }

  componentDidUpdate(){
    this.scroll_to_bottom();
  }

  render_messages(){
    return _.map(this.props.messages, message => {
      return(
        <div key={message.id} id={`message-${message.id}`}>
          <strong>{message.user.email}</strong>
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
        <h1>Powered by Rails 5.1 + ActionCable + React + Redux</h1>
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
  return { messages: state.messages };
}

export default connect(mapSateToProps, {fetchMessages})(MessageBox);
