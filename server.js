var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/examples'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/source', express.static(__dirname + '/source'));

app.listen(2000);