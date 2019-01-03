import React from 'react';
import { PropTypes } from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Rate,
  CardQuestion,
  CardAuthor,
  CardViews
} from '../../assets/styles/index';

const TestCard = ({ isVerified, question, author, views, percent }) => (
  <Card
    onClick={() => {
      console.log(question);
    }}
  >
    <CardHeader verified={isVerified} />
    <CardBody>
      <CardQuestion>
        <LinesEllipsis text={question} maxLine="4" ellipsis="..?" />
      </CardQuestion>
      <CardAuthor>{author}</CardAuthor>
      <CardViews>{views}</CardViews>
    </CardBody>
    <CardFooter>
      <Rate percent={percent} />
    </CardFooter>
  </Card>
);

TestCard.propTypes = {
  isVerified: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  percent: PropTypes.string.isRequired
};

export default TestCard;
