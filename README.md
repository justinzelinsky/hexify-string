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
```

## Reason

I saw the website <a href="http://randomstringtocsscolor.com/">randomstringtocsscolor.com</a> and I thought
that it was pretty neat!

However, I noticed a lot of duplicates. (e.g. "he" produces #00ee00 , as does "hel"), so, I decided
to rewrite it to have less duplicates.

I convert each character of the string into its ASCII code and then convert that to hexadecimal.

Then I combine those characters into a new string, pad with 0's if necessary, and then I trim the string
down to length 6 by adding each set of two numbers together and concatinating the new results together.

It's pretty neat.
