const { alphabet } = require('../utils');

function getMessage({ message, length, key }) {
  const repeatedKey = [...new Array(Math.ceil(message.length / length))].reduce((repeated) => repeated + key, '');
  const keyOfSameLengthThanMessage = repeatedKey.slice(0, message.length);

  const messageDecrypted = keyOfSameLengthThanMessage.split('').reduce((_message, letter, index) => {
    const letterIndex = alphabet.indexOf(letter);
    const alphabetPortion = alphabet.slice(letterIndex);
    const beginning = alphabet.slice(0, letterIndex);
    const newAlphabet = [...alphabetPortion, ...beginning];

    const newLetterIndex = newAlphabet.indexOf(message[index]);
    return _message + alphabet[newLetterIndex];
  }, '');

  return {
    message,
    length,
    key,
    messageDecrypted,
  };
}

module.exports = getMessage;
