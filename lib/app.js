const express = require('express');
const app = express();

const dogs = [
  { name: 'Fido', breed: 'Golden Retriever', color: 'orange' },
  { name: 'Albert', breed: 'Pug', color: 'Black' }
];

app.use(express.static('./public'));

app.get('/api/v1/dogs', (req, res) => {
  res.send(dogs);
});

module.exports = app;
