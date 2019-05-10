import React, { Component } from 'react';
import { Page } from '../../assets/styles/index';
import TestForm from '../forms/testForm';
import { saveTest } from '../../services/editorService';

class Editor extends Component {
  handleSubmit = (data) => {
    const test = { ...data };
    test.answers = [test.firstAnswer, test.secondAnswer, test.thirdAnswer, test.fourthAnswer];
    delete test.firstAnswer;
    delete test.secondAnswer;
    delete test.thirdAnswer;
    delete test.fourthAnswer;
    if (!test.description) {
      delete test.description;
    }
    saveTest({ ...test, _id: this.props.match.params.id });
  };

  render() {
    return (
      <Page narrow>
        <h2>Редактор</h2>
        <TestForm onSubmit={this.handleSubmit} testId={this.props.match.params.id} />
      </Page>
    );
  }
}

export default Editor;
