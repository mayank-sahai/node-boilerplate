
/* ********************************* Import Local Modules ********************************* */
const { userController } = require('./controllers');
const { validator } = require('./middlewares');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ status: true, message: req.csrfToken() });
  });

  app.post('/check', (req, res) => {
    res.send({ status: true, message: 'Ok' });
  });

  /* ********************************* User APIs ********************************* */
  app.post('/login', validator, userController.login );

};
