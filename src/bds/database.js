const mongoose = require('mongoose');
const { databaseUrl } = require('../../config'); 
  
async function connectToDatabase() {
  try {
    await mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = {
  connectToDatabase,
};
