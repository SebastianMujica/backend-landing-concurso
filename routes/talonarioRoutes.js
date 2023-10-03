const talonarioController = require('../controllers/talonarioController');
const passport = require('passport');

module.exports = (app) => {

    app.post('/api/talonario/register', talonarioController.register);
        
    //app.put('/api/users/update', passport.authenticate('jwt',{session: false}) , usersController.update);
}