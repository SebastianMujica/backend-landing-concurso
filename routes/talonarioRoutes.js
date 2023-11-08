const talonarioController = require('../controllers/talonarioController');
const passport = require('passport');

module.exports = (app) => {

    app.post('/api/talonario/register', talonarioController.register);
    app.get('/api/talonario/getAll', talonarioController.getAll);
}