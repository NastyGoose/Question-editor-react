import React, { Component } from 'react';
import Grid from '../common/grid';
import TestCard from '../TestCard';
import { getTests } from '../../services/fakeTestService';
import { Page } from '../../assets/styles/index';

class TestsPage extends Component {
  state = {
    tests: []
  };

  componentDidMount() {
    this.setState({ tests: getTests() });
  }

  render() {
    const { tests } = this.state;

    return (
      <Page none>
        <Grid component={TestCard} data={tests} />
      </Page>
    );
  }
}

export default TestsPage;
