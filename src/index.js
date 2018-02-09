const proverbs = require('./proverbios.json');

const all = () => proverbs.map(proverbio => proverbio.text);
const random = () => proverbs[Math.floor(Math.random() * proverbs.length)].text;
const containing = (words) => proverbs.filter(proverbio => proverbio.text.toLowerCase().indexOf(words.toLowerCase()) !== -1);

module.exports = {
  all,
  random,
  containing
};
