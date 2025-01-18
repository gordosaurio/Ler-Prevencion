const express = require('express');
const { Pool } = require('pg'); // Importamos el Pool para la conexión a PostgreSQL

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: 'postgres',        // Nombre de usuario de PostgreSQL
  host: 'localhost',       // Dirección del servidor (en local)
  database: 'database_tester', // Nombre de la base de datos
  password: 'pruebacontraseña',  // Contraseña del usuario de PostgreSQL
  port: 5432,             // Puerto por defecto de PostgreSQL
});

// Ruta para obtener los datos de la tabla usuarios
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(result.rows); // Devolvemos los datos en formato JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`Microservicio corriendo en http://localhost:${port}`);
});
