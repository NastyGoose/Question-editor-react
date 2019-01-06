import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import { getTest } from '../services/fakeTestService';
import getPercentage from '../utils/getPercentage';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Rate,
  CardQuestion,
  CardAttr,
  CardVerifyText,
  CardVerifyIcon,
  CardEdit
} from '../assets/styles/index';

class TestCard extends Component {
  static mapToModelView(data) {
    return {
      id: data.id,
      isVerified: data.verified,
      question: data.question,
      author: data.author,
      views: data.views,
      likes: data.likes,
      dislikes: data.dislikes
    };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    isVerified: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired
  };

  render() {
    const { id, isVerified, question, author, views, likes, dislikes } = this.props;

    return (
      <Card
        onClick={() => {
          console.log(getTest(id));
        }}
      >
        <CardHeader>
          <Link to="/register">
            <CardEdit icon="edit" />
          </Link>
          <Container none>
            <CardVerifyText>{isVerified ? 'Verified' : 'Not verified'}</CardVerifyText>
            <CardVerifyIcon icon={isVerified ? 'check' : 'times'} />
          </Container>
        </CardHeader>
        <CardBody>
          <CardQuestion>
            <LinesEllipsis text={question} maxLine="4" ellipsis="..?" />
          </CardQuestion>
          {/* eslint-disable */}
          <CardAttr>Author: {author}</CardAttr>
          <CardAttr>Viwes: {views}</CardAttr>
          {/* eslint-enable */}
        </CardBody>
        <CardFooter>
          <Rate percent={getPercentage(likes, likes + dislikes)} />
        </CardFooter>
      </Card>
    );
  }
}

export default TestCard;
