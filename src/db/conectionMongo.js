const mongoose = require('mongoose');

const connectDBMongo = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/biblioteca');
    console.log('Conexión exitosa => MongoDB');
  } catch (error) {
    console.error('Error de conexión => MongoDB:', error.message);
  }
};

module.exports = connectDBMongo;