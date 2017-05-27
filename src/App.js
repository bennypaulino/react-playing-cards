import React, { Component } from 'react';
import Deck from './helpers/Deck.js';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.setState({
      deck: new Deck()
    });
  }
  render() {
    const deck = this.state.deck;
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Playing Cards</h1>
          <p className="subtitle">
            Object Oriented Programming and Templating in JavaScript
          </p>
        </div>
        {JSON.stringify(deck)}
      </div>
    );
  }
}

export default App;
