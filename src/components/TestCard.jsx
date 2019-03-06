import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import getPercentage from '../utils/getPercentage';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Rate,
  CardQuestion,
  CardAttr,
  CardVerify,
  CardVerifyText,
  CardVerifyIcon,
  CardEdit,
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
      dislikes: data.dislikes,
    };
  }

  static propTypes = {
    isVerified: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
  };

  handleTestCardClick = () => {
    this.props.onTestCardClick(this.props.id);
  };

  render() {
    const {
      isVerified, question, author, views, likes, dislikes, id, user,
    } = this.props;

    return (
      <Card>
        <CardHeader>
          {author === user && (
            <Link to={`/editor/${id}`}>
              <CardEdit icon="edit" />
            </Link>
          )}
          <CardVerify>
            <CardVerifyText>{isVerified ? 'Verified' : 'Not verified'}</CardVerifyText>
            <CardVerifyIcon icon={isVerified ? 'check' : 'times'} />
          </CardVerify>
        </CardHeader>
        <CardBody>
          <CardQuestion onClick={this.handleTestCardClick}>
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
