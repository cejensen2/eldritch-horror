import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import TitlePage from './TitlePage';
import GameBoard from './GameBoard';
import GameSetup from './GameSetup';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TitlePage} />
        <Route path="/game" component={GameBoard} />
        <Route path="/gamesetup" component={GameSetup} />
      </Switch>
    );
  }
}

export default withRouter(App);
