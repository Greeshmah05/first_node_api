console.log("My first node js program");
const http = require('http');
 
 // Create an HTTP server
 const server = http.createServer((req, res) => {
     // Set the response HTTP header with HTTP status and Content-Type
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
 
     // Send the response body
     res.end('<h1>Hello, World!</h1>\n');
 });
 
 // Define the port to listen to
 const port = 3000;
 console.log("Contributing to a shared project");
 // The server listens on port 3000
 server.listen(port, () => {
     console.log(`Server running at http://localhost:${port}/`);
 });

 //convert the project 
 //into an express npm project 
 //then create a get api example http://localhost:3000/hello 
 //responding json response example {"message":"hello world"}