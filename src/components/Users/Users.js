import React, { Component } from "react";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "jetleebruce",
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
        login: "jetleebruce",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/12411736?s=460&v=4",
        html_url: "https://github.com/jetleebruce"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.id}>{user.login}</div>
        ))}
      </div>
    );
  }
}

export default Users;
