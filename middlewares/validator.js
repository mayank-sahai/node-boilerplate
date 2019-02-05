
/** ********************** Require Node modules ********************* */
const JOI = require('joi');
const Boom = require('boom');

/** ********************** Require Local modules ********************* */
const { logger } = require('../utils');

const schema = {
  '/login': {
    body: JOI.object().keys({
      email: JOI.string().email().required(),
      password: JOI.string().regex(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/).required(),
    }),
    params: null,
  }
}

module.exports = async (req, res, next) => {

  try {
    if (schema[req.route.path].body) {
      // Body validation
      let bodyResult = await JOI.validate(req.body, schema[req.route.path].body);
    }
    if (schema[req.route.path].params) {
      // Param validation
      let paramResult = await JOI.validate(req.params, schema[req.route.path].params);
    }
    next();
  } catch (err) {
    logger.error("Error in API validation", err.details[0].message);
    next(Boom.badData(err.details[0].message));
  }
};