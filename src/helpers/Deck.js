import _ from 'lodash';
import Card from './Card.js';

export default class Deck {
  constructor() {
    const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]
    this.cards = [];

    ranks.forEach( (rank) => {
      suits.forEach( (suit) => {
        const card = new Card(rank, suit);
        this.cards.push(card);
      });
    });
  }

  deal() {
    return this.cards.shift();
  }

  shuffle() {
    this.cards = _.shuffle(this.cards);
  }
}