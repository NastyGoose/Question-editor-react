import React, { Component } from 'react';
import TestCard from './TestCard';
import { getTests } from '../../services/fakeTestService';
import { GridContainer, GridItem } from '../../assets/styles/index';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: []
    };
  }

  componentDidMount() {
    this.setState({ tests: getTests() });
  }

  render() {
    const { tests } = this.state;
    return (
      <GridContainer>
        {tests.map(t => (
          <GridItem key={t.id}>
            <TestCard
              id={t.id}
              isVerified={t.verified}
              question={t.question}
              author={t.author}
              views={t.views}
              percent={t.percent}
            />
          </GridItem>
        ))}
      </GridContainer>
    );
  }
}

export default Grid;
