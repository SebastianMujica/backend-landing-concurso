const cuponesController = require('../controllers/cuponesController');
const passport = require('passport');

module.exports = (app) => {

  app.get('/api/cupones/getAll', passport.authenticate('jwt',{session: false}) , cuponesController.getAll);
  app.post('/api/cupones/create', cuponesController.register);
  
}
