# Hexify String

[![npm](https://img.shields.io/npm/v/hexify-string.svg)](https://www.npmjs.com/package/hexify-string)
[![npm bundle size](https://img.shields.io/bundlephobia/min/hexify-string)](https://bundlephobia.com/result?p=hexify-string)
[![Build Status](https://travis-ci.com/justinzelinsky/hexify-string.svg?branch=master)](https://travis-ci.com/justinzelinsky/hexify-string)
[![codecov](https://codecov.io/gh/justinzelinsky/hexify-string/branch/master/graph/badge.svg)](https://codecov.io/gh/justinzelinsky/hexify-string)
![npm](https://img.shields.io/npm/dm/hexify-string)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Install

```
npm install hexify-string
```

## Usage

```javascript
const hexifyString = require('hexify-string');

const hexStr = hexifyString('Hello');
console.log(hexStr); // cb2250
```

## Reason

I saw the website <a href="http://randomstringtocsscolor.com/">randomstringtocsscolor.com</a> and I thought it was pretty neat!

However, I noticed a lot of duplicates. (e.g. "he" produces #00ee00 , as does "hel"), so, I decided
to rewrite it to have fewer duplicates.

## Thanks

Many thanks to my friend Julian for taking time to review my code and offer advice.
