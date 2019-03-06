import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Page } from '../../../assets/styles';
import UsersTable from './usersTable';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const userss = [
  {
    reputation: 0,
    permission: 63,
    _id: '5c7e6edc6769b50fd84d04b2',
    name: 'Valik',
    email: 'valik.mihael@mail.ru',
    password: '$2b$10$og6/XnxS0ZvbzOwDmp6RVOJdXn2N2vWQ0C4ZLM2xTF4jZETPKdGsK',
    tests: [
      {
        answer: {
          isAnswered: false,
          isAnsweredCorrectly: false,
        },
        isMine: true,
        isVisited: false,
        isLiked: true,
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
    ],
    __v: 0,
  },
  {
    reputation: 0,
    permission: 63,
    _id: '5c7e9a7a78856e1a74dcbc32',
    name: 'Valera',
    email: 'valera.mihael@mail.ru',
    password: '$2b$10$wKWEa17m7ky8Xur8vr4cIOKb8xpQYgN1BwvkvLAlE25KCf9loGOxy',
    tests: [],
    __v: 0,
  },
];

class Users extends Component {
  state = {
    users: [],
    userPermission: {},
  };

  componentDidMount = () => {
    const userPermission = {};
    userss.forEach((item) => {
      userPermission[item._id] = item.permission;
    });

    this.setState({ users: userss, userPermission });
  };

  handleSelectUserType = ({ target: input }) => {
    this.setState((state) => {
      const userPermission = { ...state.userPermission };
      userPermission[input.name] = input.value;
      return { userPermission };
    });
  };

  handleSubmit = () => {
    console.log(this.state.userPermission);
  };

  render() {
    const { users, userPermission } = this.state;

    return (
      <Page>
        <h2>Users</h2>
        {users.length && (
          <UsersTable
            onSubmit={this.handleSubmit}
            onSelectUserType={this.handleSelectUserType}
            data={users}
            userPermission={userPermission}
          />
        )}
        <Button
          onClick={this.handleSubmit}
          variant="contained"
          className={this.props.classes.button}
        >
          Submit
        </Button>
      </Page>
    );
  }
}

export default withStyles(styles)(Users);
