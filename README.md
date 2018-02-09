# Provérbios Populares Portugueses

Todos os provérbios populares portugueses.

[![Build Status](https://travis-ci.org/AndreVarandas/proverbios-populares.svg?branch=master)](https://travis-ci.org/AndreVarandas/proverbios-populares)[![codecov](https://codecov.io/gh/AndreVarandas/proverbios-populares/branch/master/graph/badge.svg)](https://codecov.io/gh/AndreVarandas/proverbios-populares)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

### Usage
`$ npm install --save proverbios-portugueses`

```javascript
const proverbios = require('proverbios-portugueses');

const all = proverbios.all();
const random = proverbios.random();
const withGodWord = proverbios.containing('deus');

console.log(random);
// 'A vozes loucas, orelhas moucas.'
```

[MIT - André Varandas](LICENSE)
