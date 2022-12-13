// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('../server/models/diseases');

router.get('/app/systemsettings', (req, res) => {
    res.status(200).render('systemsettings', {pageTitle: "System settings"});
});

module.exports = router;