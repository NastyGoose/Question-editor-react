import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Page } from '../../../assets/styles';
import EditProfileForm from './editProfileForm';
import Achievement from './achievement';

const ProfileSection = styled.section`
  border-right: solid 1px;
  padding-right: 10px;
  margin-right: 10px;
`;

const ProfileTitle = styled.div`
  display: flex;
  align-items: flex-end;
`;

const AchievementsSection = styled.section`
  border-top: solid 1px;
  margin-top: 10px;
`;

const DataSection = styled.section`
  margin-bottom: 10px;
`;

const AchievementTitle = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileArticle = styled.article`
  display: flex;
  align-items: flex-start;
`;

const EditSection = styled.section`
  width: 100%;
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
});

const user = {
  reputation: 0,
  permission: 63,
  _id: '5c7e6edc6769b50fd84d04b2',
  name: 'Valik',
  email: 'valik.mihael@mail.ru',
  tests: [
    {
      answer: {
        isAnswered: true,
        isAnsweredCorrectly: false,
      },
      isMine: true,
      isVisited: false,
      isLiked: false,
      isDisliked: false,
      _id: '5c7e6eea6769b50fd84d04b9',
      test: '5c7e6ee96769b50fd84d04b3',
    },
    {
      answer: {
        isAnswered: false,
        isAnsweredCorrectly: false,
      },
      isMine: true,
      isVisited: false,
      isLiked: false,
      isDisliked: true,
      _id: '5c7e6ef06769b50fd84d04c0',
      test: '5c7e6ef06769b50fd84d04ba',
    },
    {
      answer: {
        isAnswered: true,
        isAnsweredCorrectly: true,
      },
      isMine: false,
      isVisited: true,
      isLiked: true,
      isDisliked: false,
      _id: '5c7e6ef06769b50fd84s04c0',
      test: '5c7e6ef06769b50fda4d04ba',
    },
  ],
};

class Profile extends Component {
  state = {
    mineTestsCount: 0,
    visitedTestsCount: 0,
    likedTestsCount: 0,
    dislikedTestsCount: 0,
    answeredTestsCount: 0,
    answeredCorrectlyTestsCount: 0,
  };

  componentDidMount = () => {
    this.populateUser();
  };

  populateUser = () => {
    const { id: userId } = this.props.match.params;
    if (!userId) {
      // set profile data
      console.log('profile');
      this.setUserData(user.tests);
      return;
    }

    console.log('another user', userId);
    // set another user data
    this.setUserData(user.tests);
  };

  setUserData = (tests) => {
    const mineTestsCount = tests.filter(test => test.isMine).length;
    const visitedTestsCount = tests.filter(test => test.isVisited).length;
    const likedTestsCount = tests.filter(test => test.isLiked).length;
    const dislikedTestsCount = tests.filter(test => test.isDisliked).length;
    const answeredTestsCount = tests.filter(test => test.answer.isAnswered).length;
    const answeredCorrectlyTestsCount = tests.filter(test => test.answer.isAnsweredCorrectly)
      .length;

    this.setState({
      mineTestsCount,
      visitedTestsCount,
      likedTestsCount,
      dislikedTestsCount,
      answeredTestsCount,
      answeredCorrectlyTestsCount,
    });
  };

  handleSubmit = (data) => {
    console.log(data);
  };

  render() {
    const { classes } = this.props;
    const {
      mineTestsCount,
      visitedTestsCount,
      likedTestsCount,
      dislikedTestsCount,
      answeredTestsCount,
      answeredCorrectlyTestsCount,
    } = this.state;

    return (
      <Page>
        <Paper className={classes.root} elevation={1}>
          <ProfileArticle>
            <ProfileSection>
              <DataSection>
                <ProfileTitle>
                  <Typography variant="h4" component="h2">
                    Profile
                  </Typography>
                </ProfileTitle>
                <Typography component="p">{`Name: ${user.name}`}</Typography>
                <Typography component="p">{`Login: ${user.email}`}</Typography>
              </DataSection>
              <AchievementsSection>
                <AchievementTitle>Achievements:</AchievementTitle>
                <AchievementsList>
                  <Achievement icon="plus" label={`${mineTestsCount} tests created`} />
                  <Achievement icon="eye" label={`${visitedTestsCount} tests visited`} />
                  <Achievement icon="thumbs-up" label={`${likedTestsCount} tests liked`} />
                  <Achievement icon="thumbs-down" label={`${dislikedTestsCount} tests disliked`} />
                  <Achievement icon="check" label={`${answeredTestsCount} tests answered`} />
                  <Achievement
                    icon="check-double"
                    label={`${answeredCorrectlyTestsCount} tests answered correctly`}
                  />
                </AchievementsList>
              </AchievementsSection>
            </ProfileSection>
            <EditSection>
              <Typography variant="h4" component="h4">
                Edit Profile
              </Typography>
              <EditProfileForm onSubmit={this.handleSubmit} />
            </EditSection>
          </ProfileArticle>
        </Paper>
      </Page>
    );
  }
}

export default withStyles(styles)(Profile);
