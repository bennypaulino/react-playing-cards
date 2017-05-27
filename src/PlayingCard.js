import React from 'react';

export default class PlayingCard extends React.Component {

  render () {
    return (
      <p>
        {this.props.rank} of {this.props.suit}
      </p>
    );
  }
}