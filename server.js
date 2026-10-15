const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoute');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Custom API Service. Use /api/data with an API key.' });
});

app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
