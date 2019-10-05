const { pipe, sanitazeMessage } = require('../utils');

const {
  getRepeatedWordsInThreeGroupCharacteres,
  getDistancesBetweenRepeatedStrings,
  getGCD,
} = require('./length');

const {
  getLettersAppearences,
  getKey,
} = require('./frequency');

const getMessageKeyLength = pipe(
  sanitazeMessage,
  getRepeatedWordsInThreeGroupCharacteres,
  getDistancesBetweenRepeatedStrings,
  getGCD,
);

const getKeyOfMessage = pipe(
  getLettersAppearences,
  getKey,
);

const getMessageKey = pipe(getMessageKeyLength, getKeyOfMessage);

module.exports = getMessageKey;
