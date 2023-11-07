const talonarioController = require('../controllers/talonarioController');
const passport = require('passport');

module.exports = (app) => {

    app.post('/api/talonario/register', talonarioController.register);
    app.get('/api/cupones/getAll', passport.authenticate('jwt',{session: false}) , cuponesController.getAll);
}