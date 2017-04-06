import React, { Component } from 'react'

export default class FormProject extends Component {

  constructor() {
    super()
    this.state =  { canSubmit: false }
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  submitForm(project) {
    this.props.submit(project)
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render(){
    return(
      <Paper>
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInvalid={this.disableButton.bind(this)}
          onValidSubmit={this.submitForm.bind(this)}
          onInvalidSubmit={this.notifyFormError.bind(this)}
        >
         <FormsyText
           name="name"
           validations="isWords"
           validationError='Error'
           required
           hintText="Project name"
           floatingLabelText="Name"
         />
         <RaisedButton
           type="submit"
           label="Submit"
           disabled={!this.state.canSubmit}
         />
        </Formsy.Form>
      </Paper>
    )
  }
}