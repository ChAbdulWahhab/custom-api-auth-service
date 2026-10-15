const fs = require('fs');
const path = require('path');

const verifyApiKey = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const apiKey = authHeader && authHeader.split(' ')[1]; // Bearer asduaoid0928312

    if (!apiKey) {
        return res.status(401).json({
            error: {
                message: "API key missing. Please provide a valid Bearer Token.",
                type: "invalid_request_error",
                code: 401
            }
        });
    }

    const dataPath = path.join(__dirname, '../data/mockData.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    if (!jsonData.validKeys.includes(apiKey)) {
        return res.status(403).json({
            error: {
                message: "Incorrect API key provided",
                type: "invalid_request_error",
                code: 403
            }
        });
    }

    next();
}

const verifyApiKeyMiddleware = verifyApiKey;
module.exports = verifyApiKeyMiddleware;