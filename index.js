const express = require('express');
const cors = require('cors');
const routes = require('./handlers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(3002, () => {
  // eslint-disable-next-line no-console
  console.log('Application running http://localhost:3002');
});
