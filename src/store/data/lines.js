const linesList = [
  {
    id: '1-SAN',
    xstart: -155,
    ystart: 60,
    xend: -120,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '1-CUT',
    xstart: -155,
    ystart: 60,
    xend: -169,
    yend: 60,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: 'CUT-19',
    xstart: 190,
    ystart: 60,
    xend: 180,
    yend: 65,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '1-4',
    xstart: -155,
    ystart: 60,
    xend: -110,
    yend: 60,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: '2-CUT',
    xstart: -155,
    ystart: 30,
    xend: -169,
    yend: 35,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: 'CUT-TOK',
    xstart: 190,
    ystart: 35,
    xend: 140,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '2-SAN',
    xstart: -155,
    ystart: 30,
    xend: -120,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '3-CUT',
    xstart: -130,
    ystart: -50,
    xend: -169,
    yend: -40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: 'CUT-SYD',
    xstart: 190,
    ystart: -40,
    xend: 140,
    yend: -35,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '3-BUE',
    xstart: -130,
    ystart: -50,
    xend: -60,
    yend: -30,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '4-5',
    xstart: -110,
    ystart: 60,
    xend: -95,
    yend: 40,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: '5-SAN',
    xstart: -95,
    ystart: 40,
    xend: -120,
    yend: 40,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '5-ARK',
    xstart: -95,
    ystart: 40,
    xend: -80,
    yend: 40,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '6-SAN',
    xstart: -98,
    ystart: 28,
    xend: -120,
    yend: 40,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '6-ARK',
    xstart: -98,
    ystart: 28,
    xend: -80,
    yend: 40,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '6-7',
    xstart: -98,
    ystart: 28,
    xend: -80,
    yend: 9,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '7-SAN',
    xstart: -80,
    ystart: 9,
    xend: -120,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '7-8',
    xstart: -80,
    ystart: 9,
    xend: -60,
    yend: 22,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '7-AMA',
    xstart: -80,
    ystart: 9,
    xend: -55,
    yend: -10,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: '7-BUE',
    xstart: -80,
    ystart: 9,
    xend: -60,
    yend: -30,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '8-ARK',
    xstart: -60,
    ystart: 22,
    xend: -80,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '8-10',
    xstart: -60,
    ystart: 22,
    xend: -15,
    yend: 17,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '8-BUE',
    xstart: -60,
    ystart: 22,
    xend: -60,
    yend: -30,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '9-ARK',
    xstart: -53,
    ystart: 70,
    xend: -80,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '10-ROM',
    xstart: -15,
    ystart: 17,
    xend: 15,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '10-15',
    xstart: -15,
    ystart: 17,
    xend: 18,
    yend: -33,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '10-PYR',
    xstart: -15,
    ystart: 17,
    xend: 25,
    yend: 20,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: '11-BUE',
    xstart: -10,
    ystart: -40,
    xend: -60,
    yend: -30,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '11-15',
    xstart: -10,
    ystart: -40,
    xend: 18,
    yend: -33,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '12-BUE',
    xstart: -40,
    ystart: -60,
    xend: -60,
    yend: -30,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '12-ANT',
    xstart: -40,
    ystart: -60,
    xend: 45,
    yend: -70,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '13-LON',
    xstart: 30,
    ystart: 75,
    xend: -5,
    yend: 53,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '14-ROM',
    xstart: 25,
    ystart: 65,
    xend: 15,
    yend: 40,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '14-16',
    xstart: 25,
    ystart: 65,
    xend: 60,
    yend: 60,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '15-HEA',
    xstart: 18,
    ystart: -33,
    xend: 20,
    yend: -5,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: '15-17',
    xstart: 18,
    ystart: -33,
    xend: 75,
    yend: 15,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '15-18',
    xstart: 18,
    ystart: -33,
    xend: 75,
    yend: -40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '16-IST',
    xstart: 60,
    ystart: 60,
    xend: 30,
    yend: 50,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '16-TUN',
    xstart: 60,
    ystart: 60,
    xend: 100,
    yend: 60,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '17-IST',
    xstart: 75,
    ystart: 15,
    xend: 30,
    yend: 50,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '17-HIM',
    xstart: 75,
    ystart: 15,
    xend: 85,
    yend: 40,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: '17-SHA',
    xstart: 75,
    ystart: 15,
    xend: 110,
    yend: 20,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '17-20',
    xstart: 75,
    ystart: 15,
    xend: 115,
    yend: -4,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '18-SYD',
    xstart: 75,
    ystart: -40,
    xend: 140,
    yend: -35,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '19-TUN',
    xstart: 180,
    ystart: 65,
    xend: 100,
    yend: 60,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '19-SHA',
    xstart: 180,
    ystart: 65,
    xend: 110,
    yend: 20,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: '19-TOK',
    xstart: 180,
    ystart: 65,
    xend: 140,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '20-SHA',
    xstart: 115,
    ystart: -4,
    xend: 110,
    yend: 20,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '20-TOK',
    xstart: 115,
    ystart: -4,
    xend: 140,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '20-SYD',
    xstart: 115,
    ystart: -4,
    xend: 140,
    yend: -35,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: '21-SYD',
    xstart: 130,
    ystart: -20,
    xend: 140,
    yend: -35,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: 'ARK-LON',
    xstart: -80,
    ystart: 40,
    xend: -5,
    yend: 53,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: 'BUE-AMA',
    xstart: -60,
    ystart: -30,
    xend: -55,
    yend: -10,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: 'LON-ROM',
    xstart: -5,
    ystart: 53,
    xend: 15,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: 'ROM-IST',
    xstart: 15,
    ystart: 40,
    xend: 30,
    yend: 50,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: 'ROM-PYR',
    xstart: 15,
    ystart: 40,
    xend: 25,
    yend: 20,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: 'IST-PYR',
    xstart: 30,
    ystart: 50,
    xend: 25,
    yend: 20,
    type: 'train',
    fill: '8B0000',
  },
  {
    id: 'SHA-TOK',
    xstart: 110,
    ystart: 20,
    xend: 140,
    yend: 40,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: 'SHA-HIM',
    xstart: 110,
    ystart: 20,
    xend: 85,
    yend: 40,
    type: 'trail',
    fill: 'DAA520',
  },
  {
    id: 'SYD-ANT',
    xstart: 140,
    ystart: -35,
    xend: 45,
    yend: -70,
    type: 'boat',
    fill: '00BFFF',
  },
  {
    id: 'PYR-HEA',
    xstart: 25,
    ystart: 20,
    xend: 20,
    yend: -5,
    type: 'trail',
    fill: 'DAA520',
  },
];

export default linesList;
