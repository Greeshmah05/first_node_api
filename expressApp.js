// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port to listen on
const port = 3000;

// Create a default route for the root URL "/"
app.get('/', (req, res) => {
    // Send the response body (HTML)
    res.send('<h1>Hello, World!</h1>\n');
});

// New API route to handle "/hello" endpoint
app.get('/hello', (req, res) => {
    // Respond with a JSON object
    res.json({ message: 'hello world' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
