const express = require('express');
const path = require('path');

function staticFileServer(req, res) {
  // Get the requested file path
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, 'public', filePath);

  // Read the file and send its content as response
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(err.status || 500).send('Internal Server Error');
    }
  });
}

// Call the function to set up the server
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for accessing the root ("/"), which will serve "public/index.html"
app.get('/', staticFileServer);

// Route for accessing "/styles/style.css", which will serve "public/styles/style.css"
app.get('/styles/style.css', staticFileServer);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
