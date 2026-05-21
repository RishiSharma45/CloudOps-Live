const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('CloudOps Fully Automated 🚀');
});

app.get('/metrics', (req, res) => {
    res.json({
        status: "running",
        users: Math.floor(Math.random() * 100),
        cpu: Math.floor(Math.random() * 100) + "%",
        memory: Math.floor(Math.random() * 100) + "%"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});