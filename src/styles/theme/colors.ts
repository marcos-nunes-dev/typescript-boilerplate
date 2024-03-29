export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  base?: string;
}

export type Colors = typeof colors;

const wine = {
  50: '#FAE2E8',
  100: '#F2B7C6',
  200: '#E98AA0',
  300: '#DF5D7C',
  400: '#D63E62',
  500: '#CE234B',
  600: '#BF2049',
  700: '#AA1C45',
  800: '#961741',
  900: '#72113A',
};

const gray = {
  50: '#F7F9FA',
  70: '#ececec',
  100: '#DDDFE1',
  150: '#d6dde4',
  200: '#C3C5C8',
  300: '#AAACAE',
  400: '#909295',
  500: '#76787C',
  600: '#5C5E63',
  700: '#434549',
  800: '#292B30',
  900: '#0F1117',
};

const green = {
  50: '#E7F5E6',
  100: '#C6E5C2',
  200: '#A2D59A',
  300: '#7BC571',
  400: '#5EB952',
  500: '#40AD31',
  600: '#369E28',
  700: '#298C1C',
  800: '#1A7B10',
  900: '#005D00',
};

const blue = {
  50: '#E8EBFA',
  100: '#C3CCF3',
  200: '#9BABEB',
  300: '#6F8AE3',
  400: '#4A70DD',
  500: '#1156D6',
  600: '#044ECB',
  700: '#0043BF',
  800: '#0039B3',
  900: '#0025A1',
};

const orange = {
  50: '#FEF2DE',
  100: '#FDDEAE',
  200: '#FBC979',
  300: '#FAB341',
  400: '#F9A20A',
  500: '#F89300',
  600: '#F58700',
  700: '#EF7700',
  800: '#EA6600',
  900: '#E14A00',
};

const red = {
  50: '#FFECF0',
  100: '#FECFD6',
  200: '#EF9DA2',
  300: '#E6787E',
  400: '#F2585E',
  500: '#F84846',
  600: '#E93F45',
  700: '#D7363E',
  800: '#CA3037',
  900: '#BB252C',
};

const petroleum = {
  0: '#f6fcfc',
  10: '#e2f7f6',
  20: '#cbeeed',
  30: '#cbeeed',
  40: '#9cd6d5',
  50: '#86cac8',
  60: '#70bbba',
  70: '#56a9a8',
  80: '#3c9695',
  90: '#228181',
  100: '#006464',
};

const tifanny = {
  0: '#f6fdfc',
  10: '#e1f8f7',
  20: '#ccf3f1',
  30: '#b8eeec',
  40: '#a2e8e6',
  50: '#90e4e1',
  60: '#79dfdb',
  70: '#64d9d5',
  80: '#50d4cf',
  90: '#3bcfca',
  100: '#22C9C3',
};

const secondary = {
  green: '#005F2D',
  yellow: '#FFD25F',
  magenta: '#910041',
  blue: '#003263',
};

const grayscale = {
  white: '#F3F3F3',
  black: '#252525',
  lightGray: '#A3A3A3',
  darkGray: '#606060',
};

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  realWhite: '#fff',
  white: '#F3F3F3',
  black: '#252525',
  wine,
  gray,
  green,
  blue,
  orange,
  red,
  petroleum,
  tifanny,
  secondary,
  grayscale,
};

export default colors;
