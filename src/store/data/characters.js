const charactersList = [
  {
    name: 'Norman Withers',
    title: 'The Astronomer',
    health: 5,
    maxHealth: 5,
    sanity: 7,
    maxSanity: 7,
    hasMoved: false,
    lore: {
      value: 3,
      improved: 0,
    },
    influence: {
      value: 1,
      improved: 0,
    },
    observation: {
      value: 3,
      improved: 0,
    },
    strength: {
      value: 2,
      improved: 0,
    },
    will: {
      value: 4,
      improved: 0,
    },
    inventory: {
      spells: ['feed the mind'],
      clues: 0,
      items: [],
      allies: [],
      tickets: [],
    },
    location: 'Arkham',
  },
  {
    name: 'Lily Chen',
    title: 'The Martial Artist',
    health: 6,
    maxHealth: 6,
    sanity: 6,
    maxSanity: 6,
    hasMoved: false,
    lore: {
      value: 2,
      improved: 0,
    },
    influence: {
      value: 2,
      improved: 0,
    },
    observation: {
      value: 2,
      improved: 0,
    },
    strength: {
      value: 4,
      improved: 0,
    },
    will: {
      value: 3,
      improved: 0,
    },
    inventory: {
      spells: [],
      clues: 0,
      items: ['Protective Amulet', "Lucky Rabbit's Foot"],
      allies: [],
      tickets: [],
    },
    location: 'Shanghai',
  },
  {
    name: 'Akachi Onyele',
    title: 'The Shaman',
    health: 5,
    maxHealth: 5,
    sanity: 7,
    maxSanity: 7,
    hasMoved: false,
    lore: {
      value: 3,
      improved: 0,
    },
    influence: {
      value: 2,
      improved: 0,
    },
    observation: {
      value: 2,
      improved: 0,
    },
    strength: {
      value: 2,
      improved: 0,
    },
    will: {
      value: 4,
      improved: 0,
    },
    inventory: {
      spells: ['mists of releh'],
      clues: 1,
      items: [],
      allies: [],
      tickets: [],
    },
    location: '15',
  },
  {
    name: 'Leo Anderson',
    title: 'The Expedition Leader',
    health: 6,
    maxHealth: 6,
    sanity: 6,
    maxSanity: 6,
    hasMoved: false,
    lore: {
      value: 2,
      improved: 0,
    },
    influence: {
      value: 2,
      improved: 0,
    },
    observation: {
      value: 3,
      improved: 0,
    },
    strength: {
      value: 3,
      improved: 0,
    },
    will: {
      value: 3,
      improved: 0,
    },
    inventory: {
      spells: [],
      clues: 0,
      items: [],
      allies: ['Hired Muscle'],
      tickets: [],
    },
    location: 'Buenos Aires',
  },
  {
    name: 'Jim Culver',
    title: 'The Musician',
    health: 7,
    maxHealth: 7,
    sanity: 5,
    maxSanity: 5,
    hasMoved: false,
    lore: {
      value: 3,
      improved: 0,
    },
    influence: {
      value: 3,
      improved: 0,
    },
    observation: {
      value: 2,
      improved: 0,
    },
    strength: {
      value: 2,
      improved: 0,
    },
    will: {
      value: 3,
      improved: 0,
    },
    inventory: {
      spells: ['shriveling'],
      clues: 1,
      items: [],
      allies: [],
      tickets: [],
    },
    location: '6',
  },
  {
    name: 'Diana Stanley',
    title: 'The Redeemed Cultist',
    health: 7,
    maxHealth: 7,
    sanity: 5,
    maxSanity: 5,
    hasMoved: false,
    lore: {
      value: 4,
      improved: 0,
    },
    influence: {
      value: 2,
      improved: 0,
    },
    observation: {
      value: 3,
      improved: 0,
    },
    strength: {
      value: 3,
      improved: 0,
    },
    will: {
      value: 1,
      improved: 0,
    },
    inventory: {
      spells: ['wither'],
      clues: 0,
      items: ['Arcane Manuscripts'],
      allies: [],
      tickets: [],
    },
    location: '7',
  },
  {
    name: 'Jacqueline Fine',
    title: 'The Psychic',
    health: 4,
    maxHealth: 4,
    sanity: 8,
    maxSanity: 8,
    hasMoved: false,
    lore: {
      value: 4,
      improved: 0,
    },
    influence: {
      value: 2,
      improved: 0,
    },
    observation: {
      value: 3,
      improved: 0,
    },
    strength: {
      value: 1,
      improved: 0,
    },
    will: {
      value: 3,
      improved: 0,
    },
    inventory: {
      spells: ['flesh ward'],
      clues: 1,
      items: [],
      allies: [],
      tickets: [],
    },
    location: '5',
  },
  {
    name: 'Silas Marsh',
    title: 'The Sailor',
    health: 8,
    maxHealth: 8,
    sanity: 4,
    maxSanity: 4,
    hasMoved: false,
    lore: {
      value: 1,
      improved: 0,
    },
    influence: {
      value: 3,
      improved: 0,
    },
    observation: {
      value: 3,
      improved: 0,
    },
    strength: {
      value: 3,
      improved: 0,
    },
    will: {
      value: 3,
      improved: 0,
    },
    inventory: {
      spells: [],
      clues: 0,
      items: ['Fishing Net'],
      allies: [],
      tickets: [],
    },
    location: 'Sydney',
  },
  {
    name: 'Lola Hayes',
    title: 'The Actress',
    health: 5,
    maxHealth: 5,
    sanity: 7,
    maxSanity: 7,
    hasMoved: false,
    lore: {
      value: 2,
      improved: 0,
    },
    influence: {
      value: 4,
      improved: 0,
    },
    observation: {
      value: 2,
      improved: 0,
    },
    strength: {
      value: 2,
      improved: 0,
    },
    will: {
      value: 3,
      improved: 0,
    },
    inventory: {
      spells: [],
      clues: 0,
      items: ['.18 Derringer'],
      allies: [],
      tickets: [],
    },
    location: 'Tokyo',
  },
  {
    name: 'Trish Scarborough',
    title: 'The Spy',
    health: 7,
    maxHealth: 7,
    sanity: 5,
    maxSanity: 5,
    hasMoved: false,
    lore: {
      value: 1,
      improved: 0,
    },
    influence: {
      value: 3,
      improved: 0,
    },
    observation: {
      value: 4,
      improved: 0,
    },
    strength: {
      value: 3,
      improved: 0,
    },
    will: {
      value: 2,
      improved: 0,
    },
    inventory: {
      spells: [],
      clues: 0,
      items: ['.45 Automatic'],
      allies: [],
      tickets: [],
    },
    location: '16',
  },
  {
    name: 'Charlie Kane',
    title: 'The Politician',
    health: 4,
    maxHealth: 4,
    sanity: 8,
    maxSanity: 8,
    hasMoved: false,
    lore: {
      value: 2,
      improved: 0,
    },
    influence: {
      value: 4,
      improved: 0,
    },
    observation: {
      value: 3,
      improved: 0,
    },
    strength: {
      value: 2,
      improved: 0,
    },
    will: {
      value: 2,
      improved: 0,
    },
    inventory: {
      spells: [],
      clues: 0,
      items: [],
      allies: ['Personal Assistant'],
      tickets: [],
    },
    location: 'San Francisco',
  },
  {
    name: 'Mark Harrigan',
    title: 'The Soldier',
    health: 8,
    maxHealth: 8,
    sanity: 4,
    maxSanity: 4,
    hasMoved: false,
    lore: {
      value: 1,
      improved: 0,
    },
    influence: {
      value: 2,
      improved: 0,
    },
    observation: {
      value: 2,
      improved: 0,
    },
    strength: {
      value: 4,
      improved: 0,
    },
    will: {
      value: 4,
      improved: 0,
    },
    inventory: {
      spells: [],
      clues: 0,
      items: ['.38 Revolver', 'Kerosene'],
      allies: [],
      tickets: [],
    },
    location: '14',
  },
];

export default charactersList;