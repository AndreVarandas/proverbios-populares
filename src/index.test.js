/* global describe, it */
const { expect } = require('chai');
const proverbios = require('./index.js');

const isArrayOfStrings = array => array.every(item => typeof item === 'string');

describe('proverbios populares portugueses', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(proverbios.all()).to.satisfy(isArrayOfStrings);
    });
    it('should contain: Há males que vêm por bem.', () => {
      expect(proverbios.all()).to.include('Há males que vêm por bem.');
    });
  });

  describe('random', () => {
    it('should return a random value from the proverbios list', () => {
      const randomProverbio = proverbios.random();
      expect(proverbios.all()).to.include(randomProverbio);
    });
  });

  describe('containing words', () => {
    it('should return a proverb that containing the passed words', () => {
      const proverbsWithDeus = proverbios.containing('deus');
      expect(proverbsWithDeus).to.have.length(21);
    });
  });
});
