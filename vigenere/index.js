const getMessageKey = require('./key');
const getMessage = require('./message');
const { pipe } = require('./utils');

module.exports = pipe(getMessageKey, getMessage);
