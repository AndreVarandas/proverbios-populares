const proverbs = require('./proverbios.json');

const find = words =>
  proverbs.filter(proverbio =>
    proverbio.text.toLowerCase().indexOf(words.toLowerCase()) !== -1);

const all = () => proverbs.map(proverbio => proverbio.text);
const random = () => proverbs[Math.floor(Math.random() * proverbs.length)].text;
const containing = words => find(words).map(word => word.text);

module.exports = {
  all,
  random,
  containing,
};
