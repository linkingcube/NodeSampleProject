var express = require('express');
var path = require('path');
var app = express();
app.use('/',express.static(path.join(__dirname, '../client')));

app.get('/foo', function (req, res) {
	var foo = ["from server1","from server 2"];
 	res.send(foo);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});