
/* ********************************* Import Local Modules ********************************* */
const { logger } = require('../utils');
const { userService } = require('../services');

module.exports = {

  login: async (req, res, next) => {

    logger.info("Login Request: ", req.body);

    let loginResult = await userService.login(req.body);
    if (loginResult) {
      res.data = req.body;
    }

    next();

  }
}