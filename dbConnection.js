
/** ********************** Require node modules ************************ */
const Sequelize = require('sequelize');
const config = require('config');
const { logger } = require('./utils');

const {
  username, password, database, host, dialect, port,
} = config.get('dbConfig');


/** Database Connection */
const db = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${database}`);


db.authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
  })
  .catch((err) => {
    logger.error('Unable to connect to the database:', err);
  });

module.exports = {
  db,
  Sequelize
};
