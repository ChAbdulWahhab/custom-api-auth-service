const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const verifyApiKey = require('../middleware/apiKeyAuth');

router.get('/data', verifyApiKey, (req, res) => {
    try {
        const dataPath = path.join(__dirname, '../data/mockData.json');
        const rawData = fs.readFileSync(dataPath, 'utf-8');
        const jsonData = JSON.parse(rawData);

        res.status(200).json({
            object: 'list',
            data: jsonData.items
        });
    } catch (error) {
        res.status(500).json({ error: { message: 'Internal Server Error' } });
    }
});

module.exports = router;