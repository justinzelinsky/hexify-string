# Hexify String

[![Build Status](https://travis-ci.org/justinzelinsky/hexify-string.svg?branch=master)](https://travis-ci.org/justinzelinsky/hexify-string)

## Install

```
npm install hexify-string
```

## Usage

```javascript
const hexifyString = require('hexify-string');

const hexStr = hexifyString('Hello, World!');
console.log(hexStr); // 867d11
```

## Reason

I saw the website <a href="http://randomstringtocsscolor.com/">randomstringtocsscolor.com</a> and I thought it was pretty neat!

However, I noticed a lot of duplicates. (e.g. "he" produces #00ee00 , as does "hel"), so, I decided
to rewrite it to have fewer duplicates.

I convert each character of the string into its ASCII code and then convert that to hexadecimal.

Then I combine those characters into a new string, pad with 0's if necessary, and then I trim the string
down to length 6 by adding each set of two numbers together and concatenating the new results together.

## Thanks

Many thanks to my friend Julian for taking time to review my code and offer advice.
