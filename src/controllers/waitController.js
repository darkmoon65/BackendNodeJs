const { connectSqlServer, closeConnection, sql } = require('../db/conectionSqlServer');

class waitController {
   static async realizarConsulta(req, res) {
        try {
          await connectSqlServer();
          const request = new sql.Request();
          const result = await request.execute("GetWaitReservations")

          console.log('Resultados de la consulta:', result.recordset);

          return res.status(200).json(result.recordset);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Error al obtener los datos' });
        } finally {
          await closeConnection();
        }
      }
}

module.exports = waitController
