const express = require('express');
const app = express();
const usersRoute = require('./routes/users');

app.use('/api', usersRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
});
