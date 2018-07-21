const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();

// Middleware / routing
app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended: true})); // ? , &, +
app.get('/form-with-get',function(request, response){
	return response.render('form-with-get');
});

app.listen(3000, function(){
	console.log('My server is running on port 3000.')
});