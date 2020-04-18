var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// IMPORT ROUTES
var indexRouter = require('./routers/index');
//var usersRouter = require('./routers/users.route');
//var postsRouter = require('./routers/posts.route');
//var messageRouter = require('./routers/messages.route');


// IMPORT DB CONNECTION MANAGER
const dbManager = require ("./database/db.manager");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set the routing routes to the each script
app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/post', postsRouter);
//app.use('/message', messageRouter);


/**
 * Testing the connection to the database and recreate the models if the tables doesn´t exists  
 */
dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('****Connection has been established successfully.****');
    // recreate the models if the tables doesn´t exists
    dbManager.sequelizeConnection.sync().then(() => {
        console.log("Database Synced");
      });

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;


