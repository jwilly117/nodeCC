const path = require('path');

// Lets take a look at some of the core functions of path

//Basename = gets the base file name
console.log(__filename);
//As opposed to 
console.log(path.basename(__filename));


//Directory Name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate Paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));

