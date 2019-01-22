import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addCharacter, removeCharacter } from '../store/characterReducer';
import { selectOldOne } from '../store/oldOnesReducer';
import { gameMapSetup } from '../store/mapReducer';
import { config } from '../store/mythosReducer';

class GameSetup extends Component {
  startGame = evt => {
    this.props.gameMapSetup(
      this.props.activeCharacters,
      this.props.selectedOldOne
    );
    this.props.config(this.props.activeCharacters.length);
  };

  handleClick = evt => {
    if (evt.target.attributes.type.value === 'add') {
      this.props.addCharacter(
        this.props.characters.find(
          character => character.name === evt.target.attributes.name.value
        )
      );
    } else if (evt.target.attributes.type.value === 'oldadd') {
      this.props.selectOldOne(
        this.props.oldOnes.find(
          oldOne => oldOne.name === evt.target.attributes.name.value
        )
      );
    } else {
      this.props.removeCharacter(
        this.props.activeCharacters.find(
          character => character.name === evt.target.attributes.name.value
        )
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Game Setup</h1>
        <h3>Choose up to 8 characters</h3>
        <ul>
          {this.props.characters &&
            this.props.characters.map(character => {
              return (
                <li
                  key={character.name}
                  name={character.name}
                  type="add"
                  onClick={this.handleClick}
                >
                  {character.name}, {character.title}
                </li>
              );
            })}
        </ul>
        <h3>Chosen Characters</h3>
        <ul>
          {this.props.activeCharacters &&
            this.props.activeCharacters.map(character => {
              return (
                <li
                  key={character.name}
                  name={character.name}
                  type="remove"
                  onClick={this.handleClick}
                >
                  {character.name}, {character.title}
                </li>
              );
            })}
        </ul>
        <h3>Choose the Old One to fight</h3>
        <ul>
          {this.props.oldOnes &&
            this.props.oldOnes.map(oldOne => (
              <li
                key={oldOne.name}
                name={oldOne.name}
                type="oldadd"
                onClick={this.handleClick}
              >
                {oldOne.name}, {oldOne.title}
              </li>
            ))}
        </ul>
        <h4>
          Selected Old One:{' '}
          {this.props.selectedOldOne.name
            ? this.props.selectedOldOne.name
            : 'none'}
        </h4>
        <Link to="/game">
          <button
            type="button"
            onClick={this.startGame}
            disabled={
              !this.props.selectedOldOne.name ||
              !this.props.activeCharacters.length > 0
            }
          >
            Start Game
          </button>
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characterReducer.characters,
    activeCharacters: state.characterReducer.activeCharacters,
    oldOnes: state.oldOnesReducer.oldOnes,
    selectedOldOne: state.oldOnesReducer.selectedOldOne,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCharacter: character => dispatch(addCharacter(character)),
    removeCharacter: character => dispatch(removeCharacter(character)),
    selectOldOne: oldOne => dispatch(selectOldOne(oldOne)),
    gameMapSetup: (characters, oldOne) =>
      dispatch(gameMapSetup(characters, oldOne)),
    config: playernum => dispatch(config(playernum)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSetup);
