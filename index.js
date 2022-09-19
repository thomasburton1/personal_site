var express = require('express'),
    http = require('http');

var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
var server = http.createServer(app);

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('landing');
});

app.get('/projects', function (req, res) {
    res.render('projects');
});

app.get('/resume', function (req, res) {
    res.render('resume');
});

app.listen(process.env.PORT || 5000);
//console.log("Listening at localhost:4000");