
/** ********************** Require Node modules ********************* */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const csrf = require('csurf');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');

/** ********************** Require Local modules ********************* */
const routers = require('./routes');
const logger = require('./utils/logger');
const swaggerDocument = require('./swagger.json');

/** ********************** Varaiable Listing ********************* */
const app = express();
const router = express.Router();
const { port, csrfKey } = config.get('General');
const env = process.env.NODE_ENV || 'development';
const csrfProtection = csrf({ cookie: false });

// Router Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: csrfKey,
}));
app.use(csrfProtection);

app.use('/api', router);

routers(router);

// Swagger configuration
if (env === 'development') {
  const options = {
    explorer: true,
  };

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
  logger.info('Swagger running on http://localhost:5000/api-docs');
}

// Server Start
app.listen(port, (error) => {
  if (error) logger.error('Error while Application startup', error);
  else logger.info(`Application connected to ${env} environment at ${port} port`);
});
