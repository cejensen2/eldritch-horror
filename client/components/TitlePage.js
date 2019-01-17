import React, { Component } from 'react';

class TitlePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>ELDRITCH HORROR</h1>
        <p>
          Welcome to Eldritch Horror, a fun game of Lovecraftian adventure for
          1-8 players
        </p>
        <button>New Game</button> <button>Rules</button>{' '}
        <button>Exit Game</button>
      </React.Fragment>
    );
  }
}

export default TitlePage;
