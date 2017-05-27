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
    const cards = [];
    deck.cards.forEach(function(card, index) {
      const htmlElement = (
        <p key={index}>
          {card.rank} of {card.suit}
        </p>
      );
      cards.push(htmlElement);
    });
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Playing Cards</h1>
          <p className="subtitle">
            Object Oriented Programming and Templating in JavaScript
          </p>
        </div>
        {cards}
      </div>
    );
  }
}

export default App;
