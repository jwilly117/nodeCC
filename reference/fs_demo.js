const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Folder Created');
// });

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world this is a test', function(err){
    if(err) throw err;
    console.log('File Created');
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Hello, I love node.js, but not really, i hate it', function(err){
    if(err) throw err;
    console.log('File Created');
});

//Read a file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data){
    if(err) throw err;
    console.log('File Read');
    console.log(data);
});