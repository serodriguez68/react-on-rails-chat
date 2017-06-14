import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';


class NewMessage extends Component {


  renderTextArea(field){

    // console.log(field);
    const { meta: { touched, error } } = field;
    const  className = `${touched && error ? 'alert callout panel' : ''}`;

    return(
      <div>
        <div className={className}>
          {touched ? error : ''}
        </div>
        <textarea
          type="text"
          onKeyDown={field.onKeyDown}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values){
    this.props.createMessage(values, () => {
      this.props.reset();
    });
  }

  onKeyDown(event){

    const hitEnter = parseInt(event.keyCode) === 13;

    if ( hitEnter && !event.shiftKey) {
      event.preventDefault();
      const { handleSubmit } = this.props;
      // Builds the function and then invokes it
      handleSubmit(this.onSubmit.bind(this))();
    }

  }

  render() {

    // This is a property that has been passed to the component on behalf
    // of redux-form (given on export default reduxFrom)
    // handleSubmit is a redux-form function that handles all the redux-form
    // part of form submittal (state and validation). We must pass a function
    // that will be called if everything is ok with handleSubmit
    const { handleSubmit } = this.props;

    return (
      <form ref="NewMessageForm" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Field
          name="content"
          onKeyDown={this.onKeyDown.bind(this)}
          component={this.renderTextArea}
        />
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  if (!values.content) {
    errors.content = 'Come On! Say something!';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'NewMessageForm'
})(
  connect(null, { createMessage })(NewMessage)
);
