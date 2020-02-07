import React, { Component } from "react";
import PropTypes from 'prop-types'


export class Navbar extends Component {
  static defaultProps = {
    title: "GitFinder",
    icon: "fab fa-github"
  };

  static propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired

  }
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
