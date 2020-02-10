
/** ********************** Require Node modules ********************* */
const JOI = require('joi');
const Boom = require('boom');

/** ********************** Require Local modules ********************* */
const { logger } = require('../utils');

const schema = {
  '/auth': {
    body: JOI.object().keys({
      email: JOI.string().email().required(),
      name: JOI.string().required(),
    }),
    params: null,
  },

};

module.exports = async (req, res, next) => {
  try {
    if (schema[req.route.path].body) {
      // Body validation
      await JOI.validate(req.body, schema[req.route.path].body);
    }
    if (schema[req.route.path].query) {
      // Param validation
      await JOI.validate(req.query, schema[req.route.path].query);
    }
    next();
  } catch (err) {
    logger.error('Error in API validation', err.details[0].message);
    next(Boom.badData(err.details[0].message));
  }
};
