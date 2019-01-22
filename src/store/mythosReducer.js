const configArray = [
  {},
  { spawnGates: 1, spawnClues: 1, monsterSurge: 1 },
  { spawnGates: 1, spawnClues: 1, monsterSurge: 1 },
  {
    spawnGates: 1,
    spawnClues: 2,
    monsterSurge: 2,
  },
  {
    spawnGates: 1,
    spawnClues: 2,
    monsterSurge: 2,
  },
  {
    spawnGates: 2,
    spawnClues: 3,
    monsterSurge: 2,
  },
  {
    spawnGates: 2,
    spawnClues: 3,
    monsterSurge: 2,
  },
  {
    spawnGates: 2,
    spawnClues: 4,
    monsterSurge: 3,
  },
  {
    spawnGates: 2,
    spawnClues: 4,
    monsterSurge: 3,
  },
];

const gateLocations = [
  'San Francisco',
  'Arkham',
  'Buenos Aires',
  'London',
  'Rome',
  'Istanbul',
  'Shanghai',
  'Tokyo',
  'Sydney',
];

const clueLocations = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  'San Francisco',
  'Arkham',
  'Buenos Aires',
  'London',
  'Rome',
  'Istanbul',
  'Shanghai',
  'Tokyo',
  'Sydney',
  'The Amazon',
  'The Pyramids',
  'The Heart of Africa',
  'Antarctica',
  'Tunguska',
  'The Himalayas',
];

const CONFIG = 'CONFIG';
const SPAWNED_GATE = 'SPAWNED_GATE';
const SPAWNED_CLUE = 'SPAWNED_CLUE';

export const config = playernum => {
  return {
    type: CONFIG,
    ...configArray[playernum],
  };
};
export const spawnedGate = index => {
  return {
    type: SPAWNED_GATE,
    index,
  };
};
export const spawnedClue = index => {
  return {
    type: SPAWNED_CLUE,
    index,
  };
};

export default function(
  state = {
    spawnGates: 0,
    spawnClues: 0,
    monsterSurge: 0,
    mythosDeck: [],
    activeCards: [],
    mystery: {},
    gateLocations: gateLocations,
    clueLocations: clueLocations,
  },
  action
) {
  switch (action.type) {
    case CONFIG:
      return {
        ...state,
        spawnGates: action.spawnGates,
        spawnClues: action.spawnClues,
        monsterSurge: action.monsterSurge,
      };
    case SPAWNED_GATE:
      return {
        ...state,
        gateLocations: state.gateLocations.filter(
          (location, index) => index !== action.index
        ),
      };
    case SPAWNED_CLUE:
      return {
        ...state,
        clueLocations: state.clueLocations.filter(
          (location, index) => index !== action.index
        ),
      };
    default:
      return state;
  }
}
