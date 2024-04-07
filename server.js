// Require necessary modules
const http = require('http');
const fs = require('fs');
require('dotenv').config();

// Read the API key from the environment variables
const apiKey = process.env.API_KEY;

// Create a server
const server = http.createServer((req, res) => {
    // Read the HTML file
    fs.readFile('main.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error reading file');
            return;
        }

        // Replace the placeholder {{API_KEY}} with the actual API key
        const modifiedHtml = data.replace('{{API_KEY}}', apiKey);

        // Send the modified HTML content to the client
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedHtml);
    });
});

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});