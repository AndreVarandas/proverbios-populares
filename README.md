# Provérbios Populares Portugueses

Todos os provérbios populares portugueses.

[![Build Status](https://travis-ci.org/AndreVarandas/proverbios-populares.svg?branch=master)](https://travis-ci.org/AndreVarandas/proverbios-populares)[![codecov](https://codecov.io/gh/AndreVarandas/proverbios-populares/branch/master/graph/badge.svg)](https://codecov.io/gh/AndreVarandas/proverbios-populares)

### Usage
`$ npm install --save proverbios-portugueses`

![](extra/demo.png)

```javascript
const proverbios = require('proverbios-portugueses');

const all = proverbios.all();
const random = proverbios.random();
const withGodWord = proverbios.containing('deus');
```

[MIT - André Varandas](LICENSE)
