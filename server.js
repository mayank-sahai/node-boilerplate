

/** ********************** Require Node modules ********************* */
const express = require('express');


const bodyParser = require('body-parser');


const config = require('config');

/** ********************** Require Local modules ********************* */
const routers = require('./routes');

/** ********************** Varaiable Listing ********************* */
const app = express();


const router = express.Router();


const { port } = config.get('General');


const env = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', router);
routers(router);

app.listen(port, (error) => {
  if (error) console.log('Error while Application startup', error);
  else console.log(`Application connected to ${env} environment at ${port} port`);
});
