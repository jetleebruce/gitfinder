import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from './components/Users/Users'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Users/>
        <h1>Hello from Russia</h1>
      </div>
    );
  }
}

export default App;
