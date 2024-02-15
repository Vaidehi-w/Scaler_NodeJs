const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log('---------------------------------------');
    console.log('Timestamp:', new Date().toISOString());
    console.log('HTTP Method:', req.method);
    console.log('URL:', req.originalUrl);
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    console.log('---------------------------------------');
    next();
});

app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
