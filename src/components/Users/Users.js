import React, { Component } from "react";
import UserItem from './UserItem'

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "Kurwa",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/12411736?s=460&v=4",
        html_url: "https://github.com/jetleebruce"
      },
      {
        id: "2",
        login: "jetleebruce",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/12411736?s=460&v=4",
        html_url: "https://github.com/jetleebruce"
      },
      {
        id: "3",
        login: "NoPop",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/12411736?s=460&v=4",
        html_url: "https://github.com/jetleebruce"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    );
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
