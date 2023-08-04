const express = require('express');
const config = require('./shared/config');
const usersRoute = require('./modules/users/_api');
const handleError = require('./shared/errors/handle');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(usersRoute);

app.use(handleError);

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});