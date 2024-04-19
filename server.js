const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Check if the requested URL is '/lawhome'
    if (req.url === '/lawhome') {
        // Set the response HTTP header with HTTP status and content type
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        // Send the response body as "Hello, world!"
        res.end('Hello, world! This is Law Home.\n');
    } else {
        // For any other URL, respond with a 404 Not Found error
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});