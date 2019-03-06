import React, { PureComponent } from 'react';
import RegistrationForm from '../forms/registrationForm';
import { Page } from '../../assets/styles';

class RegistrationPage extends PureComponent {
  handleSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <Page narrow>
        <h2>Registration</h2>
        <RegistrationForm onSubmit={this.handleSubmit} />
      </Page>
    );
  }
}

export default RegistrationPage;
