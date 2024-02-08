
/*8. Problem: Express Error Handling

Problem Statement: Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to 
catch and handle this specific error, returning a custom error message and a 400 Bad Request status.*/
const express = require('express');
const app = express();

function positiveIntegerHandler(req, res,next) {
    const number = parseInt(req.query.number); // Parse the query parameter to an integer
    if ( number > 0) {
        res.send('Success!'); // If it's a positive integer, send success response
    } else {
        res.status(404).send('Parameter "number" must be a positive integer'); // If not, send error response
    }
}

app.get('/positive', positiveIntegerHandler);

const PORT = process.env.PORT || 5000; // Use the port specified in the environment variable PORT or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
