import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import TitlePage from './TitlePage';
import GameBoard from './GameBoard';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TitlePage} />
        <Route path="/game" component={GameBoard} />
      </Switch>
    );
  }
}

export default withRouter(App);
