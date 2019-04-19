require('dotenv').config();
const massive = require('massive');
const express = require('express');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log(`Houston we have an ${err}`));

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`It's over Anakin! I have the ${SERVER_PORT} port!`)
});