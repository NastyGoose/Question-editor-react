import React, { Component } from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Answer from '../common/answer';
import { getTest } from '../../services/fakeTestService';
import { Page } from '../../assets/styles/index';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VerifyIcon = styled(FontAwesomeIcon).attrs({
  icon: 'clipboard-check',
  size: '2x',
  color: 'green',
})`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const Like = styled(FontAwesomeIcon).attrs({
  icon: 'thumbs-up',
})`
  color: ${({ isliked }) => (isliked === 'true' ? 'green' : '')};
  margin: 20px;
  cursor: pointer;
  transition: 0.3s;
`;

const Dislike = styled(FontAwesomeIcon).attrs({
  icon: 'thumbs-down',
})`
  color: ${({ isdisliked }) => (isdisliked === 'true' ? 'red' : '')};
  margin: 20px;
  cursor: pointer;
  transition: 0.3s;
`;

const AchievementsSection = styled.section`
  border-left: solid 1px;
  padding-left: 10px;
  margin-left: 10px;
`;

const AchievementTitle = styled.h3`
  margin-bottom: 10px;
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AchievementIcon = styled(FontAwesomeIcon).attrs(({ icon }) => ({
  icon,
}))`
  margin: 5px 0 5px 0;
`;

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    position: 'relative',
    color: 'black',
  },
  button: {
    margin: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

// q2f2feefef3f4 q2f2fee25f3f4
class TestPage extends Component {
  state = {
    test: {},
    isAnswered: false,
    isDescriptionShowed: false,
  };

  componentDidMount = () => {
    this.populateTest();
  };

  populateTest = (id) => {
    const { id: testId } = this.props.match.params;
    this.setState({ test: getTest(id || testId), isAnswered: false, isDescriptionShowed: false });
  };

  handleAnswer = (id, isCorrect) => {
    console.log({ id, isCorrect });
    this.setState({ isAnswered: true, isDescriptionShowed: true });
  };

  handleLike = () => {
    this.setState((state) => {
      if (state.test.isLiked) {
        return {
          test: {
            ...state.test,
            isLiked: false,
            isDisliked: false,
            likes: state.test.likes - 1,
          },
        };
      }

      if (state.test.isDisliked) {
        return {
          test: {
            ...state.test,
            isLiked: true,
            isDisliked: false,
            likes: state.test.likes + 1,
            dislikes: state.test.dislikes - 1,
          },
        };
      }

      return {
        test: {
          ...state.test,
          isLiked: true,
          isDisliked: false,
          likes: state.test.likes + 1,
        },
      };
    });
  };

  handleDislike = () => {
    this.setState((state) => {
      if (state.test.isDisliked) {
        return {
          test: {
            ...state.test,
            isLiked: false,
            isDisliked: false,
            dislikes: state.test.dislikes - 1,
          },
        };
      }

      if (state.test.isLiked) {
        return {
          test: {
            ...state.test,
            isLiked: false,
            isDisliked: true,
            likes: state.test.likes - 1,
            dislikes: state.test.dislikes + 1,
          },
        };
      }

      return {
        test: {
          ...state.test,
          isLiked: false,
          isDisliked: true,
          dislikes: state.test.dislikes + 1,
        },
      };
    });
  };

  handleNextQuestion = () => {
    this.props.history.replace('q2f2fee25f3f4');
    this.populateTest('q2f2fee25f3f4');
  };

  render() {
    const { test, isAnswered, isDescriptionShowed } = this.state;
    const { classes } = this.props;
    console.log(test);

    return (
      <Page>
        <Paper className={classes.root} elevation={1}>
          <Container>
            <div>
              {test.verified && <VerifyIcon />}
              <Typography variant="h5" component="h3">
                {test.question}
              </Typography>
              <Typography component="div">
                {!isEmpty(test)
                  && test.answers.map((answer, index) => (
                    <Answer
                      key={answer.answer}
                      answer={answer}
                      index={index}
                      onAnswer={this.handleAnswer}
                      isAnswered={isAnswered}
                    />
                  ))}
              </Typography>
              {isAnswered && (
                <Button
                  onClick={this.handleNextQuestion}
                  variant="contained"
                  className={classes.button}
                >
                  {'Next question'}
                </Button>
              )}
              <Collapse in={isDescriptionShowed}>{test.description}</Collapse>
              <Rate>
                <Typography variant="h5" component="div">
                  <Rate>
                    <Like
                      onClick={this.handleLike}
                      isliked={test.isLiked !== undefined ? test.isLiked.toString() : ''}
                      size="lg"
                    />
                    {test.likes}
                  </Rate>
                </Typography>

                <Typography variant="h5" component="div">
                  <Rate>
                    <Dislike
                      onClick={this.handleDislike}
                      isdisliked={test.isDisliked !== undefined ? test.isDisliked.toString() : ''}
                      size="lg"
                    />
                    {test.dislikes}
                  </Rate>
                </Typography>
              </Rate>
              <Typography component="p">{`Author: ${test.author}`}</Typography>
              <Typography component="p">{`${test.views} views`}</Typography>
            </div>
            <AchievementsSection>
              <AchievementTitle>Achivments:</AchievementTitle>
              <AchievementsList>
                {test.isAnswered && (
                  <Chip
                    avatar={(
                      <Avatar>
                        <AchievementIcon icon="check" />
                      </Avatar>
)}
                    label="Answered"
                    className={classes.chip}
                  />
                )}

                {test.isVisited && (
                  <Chip
                    avatar={(
                      <Avatar>
                        <AchievementIcon icon="eye" />
                      </Avatar>
)}
                    label="Visited before"
                    className={classes.chip}
                  />
                )}

                {test.isAnsweredCorrectly && (
                  <Chip
                    avatar={(
                      <Avatar>
                        <AchievementIcon icon="check-double" />
                      </Avatar>
                    )}
                    label="Answered correctly"
                    className={classes.chip}
                  />
                )}
              </AchievementsList>
            </AchievementsSection>
          </Container>
        </Paper>
      </Page>
    );
  }
}

export default withStyles(styles)(TestPage);
