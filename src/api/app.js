const express = require('express');
const cors = require('cors');
const middlewareError = require('../middlewares/error');
const UserController = require('../controllers/UserController');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cors());

app.get('/', (_, res) => res.send('enter route /researches'));

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong' })); // teste

app.post('/researches', UserController.createSearchResults);
app.get('/researches', UserController.findAllResearches);

app.use(middlewareError);

module.exports = app;
