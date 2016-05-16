var express = require ('express');

var iphone = require('../routers/iphone');
var data = require('../routers/data');

var app = express();

app.use('/', iphone);
app.use('/API', data);

app.listen(8000, function () {
	console.log('somethingnewest listening on port 8000');
};
