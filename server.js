var express = require('express');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? 8080 : 3000;
var publicPath = path.resolve(__dirname, 'public');

// Static assets
app.use(express.static(publicPath));

// Server
app.listen(port, function () {
    console.log('Server running on port ' + port);
});
