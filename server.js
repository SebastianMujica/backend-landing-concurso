const express = require('express');
const app = express();
const http = require('http');
var https = require('https');
const server = http.createServer(app);

/*const server = https.createServer({
                                    cert : fs.readFileSync('/etc/letsencrypt/live/apiviajacon.skylubricantes.com/fullchain.pem'),
                                    key :  fs.readFileSync('/etc/letsencrypt/live/apiviajacon.skylubricantes.com/privkey.pem')  
                                        },app);
*/
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
/*
* ROutes
*/

const usersRoutes = require('./routes/userRoutes')
const cuponesRoutes = require('./routes/cuponRoutes')
const talonariosRoutes = require('./routes/talonarioRoutes')
 
const port = process.env.PORT || 3030;

app.use(logger('dev'));
app.use(express.json());
app.use( express.urlencoded({
    urlencoded: true
}));
app.use(cors());
app.use(passport.initialize())
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');
app.set('port', port);

/*
* routes call
*/

usersRoutes(app);
cuponesRoutes(app);
talonariosRoutes(app);

server.listen(3030, '207.246.121.3' ||'apiviajacon.skylubricantes.com', function() {
    console.log('Server '+process.pid +' iniciada');
});

app.get('/', (req,res)=>{
    res.send('Root');
});

// ERROR HANDLE

app.use((err,req,res,next)=>{
    console.log(req);
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});
