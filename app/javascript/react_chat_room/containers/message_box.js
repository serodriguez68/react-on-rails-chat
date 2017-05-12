import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index.js.erb';

class MessageBox extends Component {
  componentDidMount(){
    this.props.fetchMessages();
  }

  render_messages(){
    return _.map(this.props.messages, message => {
      return(
        <div key={message.id}>
          <strong>{message.user.email}</strong>
          <div>{message.content}</div>
          <div>{message.created_at}</div>
          <br/>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <h1>Latin Chat from message box</h1>
        <strong>There are {_.size(this.props.messages)} messages</strong>
        <div className="callout">
          {this.render_messages()}
        </div>
      </div>
    );
  }
}


function mapSateToProps(state){
  return { messages: state.messages };
}

export default connect(mapSateToProps, {fetchMessages})(MessageBox);
