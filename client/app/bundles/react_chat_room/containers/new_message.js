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
    // this.props.resetForm();
  }

  onKeyDown(event){
    const hitEnter = parseInt(event.keyCode) === 13;
    if ( hitEnter && !event.shiftKey) {
      console.log('WIP');
      // $('#NewMessageFormSubmit').click();
      // this.onSubmit(this.props.values);
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
        <input id="NewMessageFormSubmit" type="submit" className='success button expanded'/>
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
