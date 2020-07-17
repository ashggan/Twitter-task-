const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser')

const app = express();
app.use(logger('dev'));

// parse application/json
app.use(bodyParser.json())

const db = require('./config/conn')
const TwitRoute = require('./Routes/TweetRoute')



 


// routes 
app.use('/',TwitRoute);

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

   



/**
 * Start Express server.
 */
var port = process.env.port || 5000 ;
app.listen(port,console.log(`server running on port ${port}`));