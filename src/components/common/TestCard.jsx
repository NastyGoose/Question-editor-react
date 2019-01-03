import React from 'react';
import { PropTypes } from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import { getTest } from '../../services/fakeTestService';
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

const TestCard = ({ id, isVerified, question, author, views, percent }) => (
  <Card
    onClick={() => {
      console.log(getTest(id));
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
  id: PropTypes.string.isRequired,
  isVerified: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  percent: PropTypes.string.isRequired
};

export default TestCard;
