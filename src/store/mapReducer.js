/* eslint-disable complexity */
/* eslint-disable no-case-declarations */
import locationsList from './data/locations';
import linesList from './data/lines';
import monsterList from './data/monsters';

const GAME_SETUP = 'GAME_SETUP';
const SPAWN_GATE = 'SPAWN_GATE';
const SPAWN_CLUE = 'SPAWN_CLUE';
const END_MYTHOS = 'END_MYTHOS';
const START_UPDATE = 'START_UPDATE';
const END_UPDATE = 'END_UPDATE';
const ADD_CHARACTER_TO_MAP = 'ADD_CHARACTER_TO_MAP';
const END_ACTION = 'END_ACTION';
const END_ENCOUNTER = 'END_ENCOUNTER';

export const gameMapSetup = (characters, oldOne) => {
  return {
    type: GAME_SETUP,
    characters,
    oldOne,
  };
};
export const spawnGate = location => {
  return {
    type: SPAWN_GATE,
    location,
  };
};
export const spawnClue = location => {
  return {
    type: SPAWN_CLUE,
    location,
  };
};
export const endMythos = () => {
  return {
    type: END_MYTHOS,
  };
};
export const startUpdate = () => {
  return {
    type: startUpdate,
  };
};
export const endUpdate = () => {
  return {
    type: endUpdate,
  };
};
export const addCharacterToMap = (character, location) => {
  return {
    type: ADD_CHARACTER_TO_MAP,
    character,
    location,
  };
};
export const endAction = () => {
  return {
    type: END_ACTION,
  };
};
export const endEncounter = () => {
  return {
    type: END_ENCOUNTER,
  };
};

export default function(
  state = {
    locations: locationsList,
    routes: linesList,
    doom: 12,
    omen: 'blue',
    nextOmen: 'green',
    omensList: ['blue', 'orange'],
    phase: 'mythos',
    updating: false,
    monsters: monsterList,
  },
  action
) {
  switch (action.type) {
    case GAME_SETUP:
      let updatedLocations = [];
      let unchangedLocations = state.locations.slice();
      for (let i = 0; i < action.characters.length; i++) {
        let location = state.locations.find(
          location => location.name === action.characters[i].location
        );
        location.players.push(action.characters[i]);
        updatedLocations.push(location);
        unchangedLocations = unchangedLocations.filter(
          location => location.name !== action.characters[i].location
        );
      }
      return {
        ...state,
        locations: [...unchangedLocations, ...updatedLocations],
        doom: action.oldOne.startingDoom,
      };
    case SPAWN_GATE:
      let updatedGateLocation = state.locations.find(
        location => location.name === action.location.name
      );
      updatedGateLocation.gate.hasGate = true;
      updatedGateLocation.monsters.push(
        state.monsters[Math.floor(Math.random() * state.monsters.length)]
      );
      return {
        ...state,
        locations: [
          ...state.locations.filter(
            location => location.name !== action.location.name
          ),
          updatedGateLocation,
        ],
      };
    case SPAWN_CLUE:
      let updatedClueLocation = state.locations.find(
        location => location.name === action.location.name
      );
      updatedClueLocation.clue = true;
      return {
        ...state,
        locations: [
          ...state.locations.filter(
            location => location.name !== action.location.name
          ),
          updatedClueLocation,
        ],
      };
    case END_MYTHOS:
      return {
        ...state,
        phase: 'action',
      };
    case END_ACTION:
      return {
        ...state,
        phase: 'encounter',
      };
    case END_ENCOUNTER:
      return {
        ...state,
        phase: 'mythos',
      };
    case START_UPDATE:
      return {
        ...state,
        updating: true,
      };
    case END_UPDATE:
      return {
        ...state,
        updating: false,
      };
    case ADD_CHARACTER_TO_MAP:
      let oldLocation = state.locations.find(location =>
        location.players.includes(action.character)
      );
      oldLocation.players = oldLocation.players.filter(
        player => player.name !== action.character.name
      );
      const newLocArr = state.locations.filter(
        location =>
          location.name !== action.location.name &&
          location.name !== oldLocation.name
      );
      action.location.players.push(action.character);
      newLocArr.push(action.location);
      newLocArr.push(oldLocation);
      return {
        ...state,
        locations: newLocArr,
      };
    default:
      return state;
  }
}
