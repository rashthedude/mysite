
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs  = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/pdf', express.static(__dirname + 'public/pdf/some.pdf'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

// app.get('/pdf', function(req, res) {
// 	console.log(process.cwd());
// 	fs.readFile('some.pdf', function(err, data) {
// 		if(err) {
// 			//res.json({'status': 'error'});
// 			console.log('this is the error',err);
// 		} else{
// 			res.writeHead(200, {'Content-Type': 'application/pdf'});
// 			res.write(data);
// 			res.end();
// 		}
// 	});
// 	//res.download('some.pdf', 'public/pdf');

// });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
