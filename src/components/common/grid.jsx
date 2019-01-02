import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  GridContainer,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Rate,
  CardQuestion,
  CardAuthor,
  CardViews
} from '../../assets/styles/index';

class Grid extends Component {
  state = {
    tests: [
      {
        _id: 'q2f2feefef3f4',
        verified: true,
        question:
          'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World?',
        author: 'Artem',
        views: 22,
        percent: '60%'
      },
      {
        _id: 'q2f2fee25f3f4',
        verified: false,
        question: 'Hello Valbat?',
        author: 'Valbat',
        views: 12,
        percent: '24%'
      },
      {
        _id: 'q2f2fwafef3f4',
        verified: true,
        question: 'Hello Boosh?',
        author: 'Boosh',
        views: 15,
        percent: '89%'
      },
      {
        _id: 'q2f2fwa1ef3f4',
        verified: true,
        question: 'Hello Valik?',
        author: 'Valik',
        views: 34,
        percent: '19%'
      },
      {
        _id: 'q2f2fwrfef3f4',
        verified: false,
        question: 'Hello Nikita?',
        author: 'Nikita',
        views: 19,
        percent: '55%'
      }
    ]
  };

  render() {
    return (
      <GridContainer>
        {this.state.tests.map(t => (
          <GridItem key={t._id}>
            <Card
              onClick={() => {
                console.log(t.question);
              }}
            >
              <CardHeader verified={t.verified} />
              <CardBody>
                <CardQuestion>
                  <LinesEllipsis text={t.question} maxLine="4" ellipsis="..?" />
                </CardQuestion>
                <CardAuthor>{t.author}</CardAuthor>
                <CardViews>{t.views}</CardViews>
              </CardBody>
              <CardFooter>
                <Rate percent={t.percent} />
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    );
  }
}

export default Grid;
