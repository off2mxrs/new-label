const mongoose = require('mongoose');

// local host connection
// const connectionString = 'mongodb://localhost:27017/label-db'

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  });

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`);
  });
  
  mongoose.connection.on("error", (err) => {
    console.log("Could not connect to MongoDB!", err);
  });

  module.exports = {
      Artist: require('./Artist.js')
  }