const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// API requests can go here
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});