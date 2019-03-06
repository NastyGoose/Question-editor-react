import React, { PureComponent } from 'react';
import { Page } from '../../assets/styles';
import LoginForm from '../forms/loginForm';

class LoginPage extends PureComponent {
  handleSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <Page narrow>
        <h2>Login</h2>
        <LoginForm onSubmit={this.handleSubmit} />
      </Page>
    );
  }
}

export default LoginPage;
