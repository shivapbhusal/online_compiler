/*
 An online compiler
*/

var spawn = require('child_process').spawn;
var compile = spawn('python', ['temp.py']);

compile.stdout.on('data', function (data) {
    console.log('Result: ' + data);
});


