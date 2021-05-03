var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var cors = require('cors');
const time_ago = require('timeago.js');
var useragent = require('express-useragent')
 
var app = express();
require('dotenv').config();

var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);
var LocalStrategy = require('passport-local').Strategy;

var Index = require('./routes/Index');
var IndexPost = require('./routes/IndexPost');

var port = 3000 || process.env.PORT;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(useragent.express());

var options =  { 
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  };
  
  var sessionStore = new MySQLStore(options);
  
  app.use(session({
    secret: 'MYSECRETISVERYSECRET',
    resave: true,
    store: sessionStore,
    saveUninitialized: true,
    // cookie: { secure: true } //for https
  }));
  
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());


app.use('/',Index)
app.use('/',IndexPost)

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

// Handlebars default config
const hbs = require('hbs');
const fs = require('fs');
const { nextTick } = require('process');
const { resolve } = require('path');

//LOGIC HELPERS
hbs.registerHelper('time_ago', function(arg1, options) {
  return (time_ago.format(arg1));
});

hbs.registerHelper('date_time', function(arg1, options) {
  var format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (arg1.toLocaleDateString("en-NG", format));
});

hbs.registerHelper('fullDateTime', function(arg1, options) {
  return (arg1.getFullYear()+"-"+(arg1.getMonth()+1)+'-'+arg1.getDate()+' '+arg1.getHours()+"-"+arg1.getMinutes()+'-'+arg1.getSeconds());
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app;