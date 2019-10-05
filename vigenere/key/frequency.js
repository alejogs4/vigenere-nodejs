const { alphabet } = require('../utils');

function getLettersAppearences({ message, length }) {
  const messageArray = message.split('');
  const groupsC = [...new Array(length)].map((_, index) => {
    const letters = messageArray.filter((_, _index) => _index === index || (_index - index) % length === 0);
    const amountOfEachLetter = letters.reduce((letters, letter) => {
      const newLetters = { ...letters };
      newLetters[letter] = newLetters[letter] ? newLetters[letter] + 1 : 1;
      return newLetters;
    }, {});
    return amountOfEachLetter;
  });
  return { amountOfEachLetter: groupsC, message, length };
}

function getKey({ amountOfEachLetter, message, length }) {
  const keyLetters = amountOfEachLetter.map((letters) => {
    const sortedGroups = Object.entries(letters).sort((a, b) => b[1] - a[1]);
    const [mostCommonLetter] = sortedGroups;
    const alphabetposition = alphabet.indexOf(mostCommonLetter[0]);
    const keyLetterPosition = alphabetposition - 4 < 0 ? 25 - Math.abs(alphabetposition - 4) : alphabetposition - 4;
    return alphabet[keyLetterPosition];
  });

  const key = keyLetters.reduce((key, letter) => key + letter, '');

  return {
    message,
    length,
    key,
  };
}

module.exports = {
  getLettersAppearences,
  getKey,
};
