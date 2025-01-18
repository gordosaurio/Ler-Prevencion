const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/data', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
