/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEye,
  faPlus,
  faEdit,
  faCheck,
  faTimes,
  faThumbsUp,
  faThumbsDown,
  faCheckDouble,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/navBar';
import RegistrationPage from './components/pages/registrationPage';
import LoginPage from './components/pages/loginPage';
import Logout from './components/logout';
import NotFoundPage from './components/pages/notFoundPage';
import TestsPage from './components/pages/testsPage';
import TestPage from './components/pages/testPage';
import Editor from './components/pages/editor';
import Profile from './components/pages/profile/profile';
import Users from './components/pages/users/users';

import GlobalStyle from './assets/styles/globalStyle';
import themes from './assets/styles/themes';

library.add(
  faEye,
  faEdit,
  faPlus,
  faCheck,
  faTimes,
  faThumbsUp,
  faThumbsDown,
  faCheckDouble,
  faClipboardCheck,
);

class App extends Component {
  state = {
    theme: themes.mutedTones,
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <NavBar />
          <Switch>
            <Route path="/register" component={RegistrationPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={Logout} />
            <Route path="/tests/:id" component={TestPage} />
            <Route path="/tests" component={TestsPage} />
            <Route path="/editor/:id" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/profile" component={Profile} />
            <Route path="/users" component={Users} />
            <Route path="/not-found" component={NotFoundPage} />
            <Redirect from="/" exact to="/tests" />
            <Redirect to="/not-found" />
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
