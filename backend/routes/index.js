const express = require ("express");
const router = express.Router()

//Routes will be..

router.get('/', (req, res) => {
    res.send('Welcome to Life List!')
  });

module.exports = router;
