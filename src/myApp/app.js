const express = require('express');
const bodyParser = require('body-parser'); 
const fs = require('fs');
var spawn = require('child_process').spawn;
const app = express();

// Middleware / routing
app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended: true})); // ? , &, +

app.get('/',function(request,response){
	return response.redirect('/form-with-get');
});

app.get('/form-with-get',function(request, response){
	return response.render('form-with-get');
});

app.get('/form-with-post',function(request, response){
	return response.render('form-with-post');
});

app.get('/submit-form-with-get', function(request, response){
	// Write the code to a text file.

	fs.appendFile('temp.py', request.query.source_code, (err) => {
		if (err) throw err;
	});
	var compile = spawn('python', ['temp.py']);
    var result;
	compile.stdout.on('data', function (data) {
    	result = data; 
	});
	// execute the code. 
	return response.send(result); 
});

app.listen(3000, function(){
	console.log('My server is running on port 3000.')
});