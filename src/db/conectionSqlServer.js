const sql = require('mssql/msnodesqlv8');

const config = {
  server: 'localhost',
  database: 'dbreto',
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  },
};

async function connectSqlServer (){
    try {
        await sql.connect(config);
    } catch (err) {
        console.error('Error -> sql server:', err);
        throw err;
    }
}
async function closeConnection() {
    try {
      await sql.close();
      console.log('Conexión cerrada');
    } catch (err) {
      console.error('Error al cerrar la conexión:', err);
      throw err;
    }
  }

module.exports = {connectSqlServer, closeConnection, sql};