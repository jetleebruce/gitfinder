import React, { Component } from "react";
class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: "id",
      login: "jetleebruce",
      avatar_url: "https://avatars3.githubusercontent.com/u/12411736?s=460&v=4",
      html_url: "https://github.com/jetleebruce"
    };
  }
  render() {
    return (
      <div className='card text-center'>
        <img
          src={this.state.avatar_url}
          alt=''
          className='round-img'
          style={{ width: "60px" }}
        />
      </div>
    );
  }
}

export default UserItem;
