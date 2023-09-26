const mongoose = require('mongoose');
const connectDB = (url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected`);
  });
  mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
module.exports = connectDB;