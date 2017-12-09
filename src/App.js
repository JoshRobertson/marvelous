import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader.js';
import Marvelous from './Marvelous.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Marvelous />
      </div>
    );
  }
}

export default App;
