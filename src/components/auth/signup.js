import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form">
        <fieldset className="field">
          <label>Email</label>
          <Field
           name="email"
           type="text"
           component="input"
           autoComplete="none"
          >

          </Field>
        </fieldset>
        <fieldset className="field">
          <label>Password</label>
          <Field
           name="password"
           type="password"
           component="input"
           autoComplete="none"
          >

          </Field>
        </fieldset>
        {
          this.props.errorMessage && (
            <div className="ui segment">{this.props.errorMessage}</div>
          )
        }
        <button className="ui primary button">
          Sign up
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,

  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(SignUp);
