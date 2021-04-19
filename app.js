var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongodb = require('mongodb');
const cors = require('cors');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/tasks');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

let MongoClient = mongodb.MongoClient;
console.log(`Conectando a  -> BBDD remota Mongo Atlas`);

const uri = "mongodb+srv://Ssergiomc_84:Nahi.Ihan84_Perro_campo@cluster0.nbeu6.mongodb.net/";

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    app.locals.db = client.db('todolist');
    console.log("ESTAS CONECTADO");
  }
});

module.exports = app;
