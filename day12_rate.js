/*Problem 12 :  Implement a rate-limiting middleware for an Express application. The middleware should limit the number of requests from a single IP address to a specified rate, and return a 429 Too Many Requests status if the limit is exceeded.
*/
const express = require('express');
const app = express();

// Define the rate limit settings
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute window
const RATE_LIMIT_MAX_REQUESTS = 100; // Max 100 requests per minute per IP

// Store to keep track of request counts per IP
const requestCounts = {};

// Middleware function to perform rate limiting
const rateLimitMiddleware = (req, res, next) => {
  const ip = req.ip; // Get the IP address of the requester
  const currentTime = Date.now();
  
  // Initialize request count for this IP if not exists
  if (!requestCounts[ip]) {
    requestCounts[ip] = [];
  }
  
  // Remove expired request records
  requestCounts[ip] = requestCounts[ip].filter(timestamp => currentTime - timestamp < RATE_LIMIT_WINDOW_MS);
  
  // Check if the number of requests exceeds the limit
  if (requestCounts[ip].length >= RATE_LIMIT_MAX_REQUESTS) {
    return res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
  
  // Add the current request timestamp to the array
  requestCounts[ip].push(currentTime);
  
  // Move to the next middleware/route handler
  next();
};

// Apply the rate limiting middleware to all routes
app.use(rateLimitMiddleware);

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
