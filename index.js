const express = require('express');
const cors = require('cors');
const routes = require('./handlers');
const { swaggerUi, swaggerDocument } = require('./swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3002, () => {
  // eslint-disable-next-line no-console
  console.log('Application running http://localhost:3002');
});
