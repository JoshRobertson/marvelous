import React, { Component } from "react";
import logo from "./MarvelLogo.svg";
import "./App.css";

class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Marvelous</h1>
      </header>
    );
  }
}

export default AppHeader;
