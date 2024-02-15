const express = require('express');
const app = express();

// Cache object to store responses
const cache = {};

// Middleware function to cache responses
function cachingMiddleware(req, res, next) {
    const key = req.originalUrl;

    // Check if the response is cached
    if (cache[key]) {
        const { data, timestamp } = cache[key];
        const cacheExpirationTime = 60 * 1000; // Cache expires after 1 minute (in milliseconds)

        // Check if the cached response has not expired
        if (Date.now() - timestamp < cacheExpirationTime) {
            console.log('Cache hit for', key);
            return res.send(data);
        }
    }

    // Cache miss, continue with the request handling
    next();
}

// Example route with caching middleware
app.get('/', cachingMiddleware, (req, res) => {
    // Simulate a slow response
    setTimeout(() => {
        const responseData = 'Hello World!';
        const key = req.originalUrl;
        
        // Cache the response
        cache[key] = {
            data: responseData,
            timestamp: Date.now()
        };

        res.send(responseData);
    }, 2000); // Simulating a slow response time of 2 seconds
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
