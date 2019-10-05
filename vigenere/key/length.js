const math = require('mathjs');
const { jStat } = require('jstat');
const { pipe } = require('../utils');

function splitMessageInThreeCharacterersGroups({ message }) {
  const lettersInGroupsOf = message.split('').map((_, index) => message.substring(index, index + 3));
  return { lettersInGroupsOf, message };
}

function filterRepeatedStrings({ lettersInGroupsOf, message }) {
  const repeatedStrings = lettersInGroupsOf.filter((group) => (
    (lettersInGroupsOf.lastIndexOf(group) - lettersInGroupsOf.indexOf(group)) > 0
  ));
  return { repeatedStrings: [...new Set(repeatedStrings)], message };
}

const getRepeatedWordsInThreeGroupCharacteres = pipe(
  splitMessageInThreeCharacterersGroups,
  filterRepeatedStrings,
);

function getDistancesBetweenRepeatedStrings({ repeatedStrings, message }) {
  const distances = repeatedStrings.map((letter) => (message.lastIndexOf(letter) - message.indexOf(letter)));
  return { distances, message };
}

function getGCD({ distances, message }) {
  const divisors = distances.map((distance, index) => (
    distances[index + 1] ? math.gcd(distance, distances[index + 1]) : null
  )).filter(Boolean).filter((keyLength) => keyLength > 1);

  const length = jStat.mode(divisors);
  return { length: Array.isArray(length) ? length[0] : length, message };
}

module.exports = {
  getRepeatedWordsInThreeGroupCharacteres,
  getDistancesBetweenRepeatedStrings,
  getGCD,
};
