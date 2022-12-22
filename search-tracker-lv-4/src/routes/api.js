const express = require('express');
const router = express.Router();
const { Database } = require("../helpers/database");

router.get('/search', function(req, res, next) {
    const results = Database.search(req.query.keyword);
    if (results.length > 0)
        res.json({ isEmpty: false, results });
    else 
        res.json({ isEmpty: true });
});

module.exports = router;
