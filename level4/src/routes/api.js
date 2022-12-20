const express = require('express');
const router = express.Router();
const { Database } = require('../helpers/database.js')

router.get('/note', function(req, res, next) {
    const id = req.query.id
    const note = Database.findNoteByID(id)

    res.render('../views/viewNote.ejs' ,note,)
});

module.exports = router;