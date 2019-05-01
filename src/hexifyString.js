'use strict';

function hexifyString(str) {
  if (typeof str !== 'string') return 'ffffff';
  const toCharCodes = s => s.split('').map(ch => ch.charCodeAt());
  const toColor = arr =>
    arr
      .map(ch => ch.toString(16))
      .join('')
      .padEnd(6, '0');

  let s = toCharCodes(str);
  let result = toColor(s);

  while (result.length > 6) {
    s = s.map(ascii => ((ascii & 15) + ascii) >>> 4);
    result = toColor(s);
  }

  return result;
}

module.exports = hexifyString;
