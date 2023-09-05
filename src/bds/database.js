const mongoose = require('mongoose');
const { databaseUrl } = require('../../config'); 

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
  
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
});
  
mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});
  
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
