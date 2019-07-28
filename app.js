var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/group');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 4242;
var host = process.env.YOUR_HOST || '0.0.0.0';
var home = require('./routes/home')

var app = express();


var db_url = "mongodb://Admin:admin1@ds351827.mlab.com:51827/basketball";
mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.use(express.static(__dirname + '/www'));

app.use('/', home);

app.use('/api/1.0', api);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.listen(PORT, host, function(){
    console.log('Server up and running');
});

//hello