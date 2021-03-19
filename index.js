// So for this we are going to basically combine everything we know so far into a real web server
//  Then we will deploy this to heroku hopefully, which is what I'm going for
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if(err) throw err;
    //             res.writeHead(200, { 'Content-type': 'text/html' })
    //             res.end(content);
    //         }
            
    //     )
    // }

    // if (req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'),
    //         (err, content) => {
    //             if(err) throw err;
    //             res.writeHead(200, { 'Content-type': 'text/html' })
    //             res.end(content);
    //         }
            
    //     )
    // }

    //  All of the previous code is not efficient and cannot be used easily to serve up css or anything similiar
    //  So we are going to start over

    // Start off here at 1 hour 13 minutes


});

// So for the port variable, it will not always run on 5000, so you place an "environment variable" onto it
//  This ensures that it searches for the environment variable port first (such as heroku) and if its not found, it runs on 5000 (basically for development)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server running"));
 
