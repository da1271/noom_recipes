const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const axios = require('axios');
const CircularJSON = require('circular-json');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get(`/recipes/:term`, (req, res) => {
  axios.get(`http://www.recipepuppy.com/api/?q=${req.params.term}`)
        .then(response => {
         let json = CircularJSON.stringify(response);
         res.send(json) // <= send data to the client
        })
        .catch(err => {
         console.log(err)
         res.send({ err }) // <= send error
        })
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
