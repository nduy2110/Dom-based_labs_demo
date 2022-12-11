const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index.ejs');
});

router.get('/edit', function(req, res, next) {
  res.render('../views/edit.ejs');
});

module.exports = router;
