module.exports = (app) => {

  app.get('/check', (req, res) => {
    res.send({status: true, message: "Ok"});
  })

};