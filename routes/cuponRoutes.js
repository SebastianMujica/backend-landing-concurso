const cuponesController = require('../controllers/cuponesController');
const passport = require('passport');

module.exports = (app) => {

  //app.post('/api/cupones/register', cuponesController.register);
  app.get('/api/cupones/getAll', passport.authenticate('jwt',{session: false}) , cuponesController.getAll);
  //app.post('/api/cupones/create', passport.authenticate('jwt',{session: false}) , cuponesController.register);
  app.post('/api/cupones/create', cuponesController.register);
}
