import React, { Component } from "react";

export class Navbar extends Component {
  static defaultProps = {
    title: "GitFinder",
    icon: "fab fa-github"
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          <span style={{ marginLeft: "33px" }}>{this.props.title}</span>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
