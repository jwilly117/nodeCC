
const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// HOST (root domain)
console.log(myUrl.host);
// Hostname (does not get port) - if there is a port
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);
// Paramas object
console.log(myUrl.searchParams);

// Loop through params 
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
