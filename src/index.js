const { Logger } = require('wootils/node/logger');
const finder = require('./services/finder');
const Prompt = require('./services/prompt');
const Utils = require('./services/utils');
const App = require('./app');
const { name } = require('../package.json');

const app = new App(
  finder,
  new Logger(name),
  new Prompt(name),
  Utils
);

app.movieSearch();
