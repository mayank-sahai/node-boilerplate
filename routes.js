

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ status: true, message: req.csrfToken() });
  });

  app.post('/check', (req, res) => {
    res.send({ status: true, message: 'Ok' });
  });
};
