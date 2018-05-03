const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

//Set up default for Mongo connection
const db = process.env.MONGODB_URI || 'mongodb://localhost/workout_db';

const Workout = require('./models/workout_Schema.js');

//Set up default mongoose connection and error handler
mongoose.connect(db, function (error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('Database Connected.');
  }
});



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
