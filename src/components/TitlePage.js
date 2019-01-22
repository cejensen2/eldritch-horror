import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TitlePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>ELDRITCH HORROR</h1>
        <p>
          Welcome to Eldritch Horror, a fun game of Lovecraftian adventure for
          1-8 players
        </p>
        <Link to="/gamesetup">
          <button type="button">New Game</button>
        </Link>
        <button>Rules</button> <button>Exit Game</button>
      </React.Fragment>
    );
  }
}

export default TitlePage;
