const pipe = (...fns) => (initialValue) => fns.reduce((result, fn) => fn(result), initialValue);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const sanitazeMessage = ({ message }) => ({
  // eslint-disable-next-line newline-per-chained-call
  message: String(message).replace(new RegExp('ñ', 'g'), 'n').toLowerCase().split(' ').join(''),
});

module.exports = {
  pipe,
  alphabet,
  sanitazeMessage,
};
