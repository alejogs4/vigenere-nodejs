const express = require('express');

const getMessage = require('./vigenere');

const router = express.Router();

router.post('/api/v1/vigenere', (req, res) => {
  try {
    const { message } = req.body;
    const decryptedMessage = getMessage({ message });
    res.status(200).send(decryptedMessage);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    res.status(500).send({ message: 'Error descrifrando el mensaje' });
  }
});

module.exports = router;
