/*
 An online compiler
*/
var http = require("http");
var spawn = require('child_process').spawn;
var compile = spawn('python', ['temp.py']);
var result;

compile.stdout.on('data', function (data) {
    result = data; 
});


http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(result);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');




