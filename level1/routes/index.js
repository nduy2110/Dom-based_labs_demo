const express = require('express');
const router = express.Router();
const { Database } = require("../helpers/database");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CYBERJUTSU TASKLIST', tasks: Database.getData() });
});

router.get('/search', function(req, res, next) {
  res.render('index', { title: 'CYBERJUTSU TASKLIST' });
});

module.exports = router;
