'use strict';

export default function stringToHex(str) {
  if (!str) {
    return 'FFFFFF';
  }

  let hexStr = str
    .split('')
    .map(c => c.charCodeAt().toString(16))
    .join('')
    .padEnd(6, '0');

  while (hexStr.length !== 6) {
    hexStr = hexStr
      .match(/.{2}/g)
      .map(pair => pair
        .split('')
        .reduce((first, second) => 
          parseInt(first, 16) + parseInt(second, 16)
        )
        .toString(16)
      );
    hexStr = hexStr
      .join('')
      .padEnd(6, '0');
  }

  return hexStr;
}