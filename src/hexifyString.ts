const hexList: string[] = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

const hexDecMap: {
  [key: string]: number;
} = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

export function hexifyString(str: string): string {
  if (typeof str !== 'string') {
    return 'ffffff';
  }

  let result = str
    .split('')
    .map((char) => char.charCodeAt(0).toString(16))
    .join('');

  while (result.length > 6) {
    result = result
      .split('')
      .map(function (char, i, str) {
        if (i & 1) {
          return '';
        }

        return hexList[(hexDecMap[char] + hexDecMap[str[i + 1] || '0']) & 15];
      })
      .filter((x) => x)
      .join('');
  }

  return result.length < 6 ? result.padEnd(6, '0') : result;
}
