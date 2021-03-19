
const http = require('http');

// Create a server object
http.createServer((req, res) => {
    // Write a response
    res.write('Hello world');
    res.end();
}).listen(5000, function(){
    console.log('Server is running on port 5000');
});

