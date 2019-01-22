/* eslint-disable no-case-declarations */
/* eslint-disable complexity */
import charactersList from './data/characters';

const ADD_CHARACTER = 'ADD_CHARACTER';
const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
const ACTIVATE_CHARACTER = 'ACTIVATE_CHARACTER';
const CHARACTER_REFRESH = 'CHARACTER_REFRESH';
const MOVE_CHARACTER = 'MOVE_CHARACTER';
const RESTORE_HEALTH = 'RESTORE_HEALTH';
const RESTORE_SANITY = 'RESTORE_SANITY';
const BUY_TICKET = 'BUY_TICKET';

export const addCharacter = character => {
  return {
    type: ADD_CHARACTER,
    character,
  };
};
export const removeCharacter = character => {
  return {
    type: REMOVE_CHARACTER,
    character,
  };
};
export const activateCharacter = (character = {}) => {
  return {
    type: ACTIVATE_CHARACTER,
    character,
  };
};
export const characterRefresh = () => {
  return {
    type: CHARACTER_REFRESH,
  };
};
export const moveCharacter = location => {
  return {
    type: MOVE_CHARACTER,
    location,
  };
};
export const restoreHealth = (character, amount) => {
  return {
    type: RESTORE_HEALTH,
    character,
    amount,
  };
};
export const restoreSanity = (character, amount) => {
  return {
    type: RESTORE_SANITY,
    character,
    amount,
  };
};
export const buyTicket = (character, ticket) => {
  return {
    type: BUY_TICKET,
    character,
    ticket,
  };
};

export default function(
  state = {
    characters: charactersList,
    activeCharacters: [],
    actingCharacter: {},
  },
  action
) {
  switch (action.type) {
    case ADD_CHARACTER:
      if (
        state.activeCharacters.findIndex(
          character => character.name === action.character.name
        ) === -1
      ) {
        const newCharacters = state.characters.filter(
          character => character.name !== action.character.name
        );
        return {
          ...state,
          characters: newCharacters,
          activeCharacters: [...state.activeCharacters, action.character],
        };
      } else {
        return state;
      }
    case REMOVE_CHARACTER:
      if (
        state.activeCharacters.findIndex(
          character => character.name === action.character.name
        ) !== -1
      ) {
        const newActives = state.activeCharacters.filter(
          character => character.name !== action.character.name
        );
        return {
          ...state,
          activeCharacters: newActives,
          characters: [...state.characters, action.character],
        };
      } else {
        return state;
      }
    case ACTIVATE_CHARACTER:
      let newActiveCharacters = state.activeCharacters.filter(
        character => character.name !== action.character.name
      );
      if (state.actingCharacter.name) {
        newActiveCharacters.push(state.actingCharacter);
      }
      return {
        ...state,
        activeCharacters: newActiveCharacters,
        actingCharacter: action.character,
      };
    case CHARACTER_REFRESH:
      return {
        ...state,
        actingCharacter: { ...state.actingCharacter, hasMoved: false },
      };
    case MOVE_CHARACTER:
      return {
        ...state,
        actingCharacter: {
          ...state.actingCharacter,
          location: action.location,
          hasMoved: true,
        },
      };
    case RESTORE_HEALTH:
      if (
        action.character.health + action.amount >=
        action.character.maxHealth
      ) {
        action.character.health = action.character.maxHealth;
      } else {
        action.character.health = action.character.health + action.amount;
      }
      return {
        ...state,
        actingCharacter: action.character,
      };
    case RESTORE_SANITY:
      if (
        action.character.sanity + action.amount >=
        action.character.maxSanity
      ) {
        action.character.sanity = action.character.maxSanity;
      } else {
        action.character.sanity = action.character.sanity + action.amount;
      }
      return {
        ...state,
        actingCharacter: action.character,
      };
    case BUY_TICKET:
      action.character.inventory.tickets.push(action.ticket);
      return {
        ...state,
        actingCharacter: action.character,
      };
    default:
      return state;
  }
}
