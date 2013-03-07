
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get('/', function(req, res){
	res.render('index',{
		title: 'Bienvenidos a "El Buen Camino"'
		});
	});

app.get('/services' , function(req, res){
	res.render('services', {
		title : "Servicios"
		});
	});
	
app.get('/galeria' , function(req, res){
	res.render('galeria', {
		title : 'Galeria'  
		});
	});
	
app.get('/informacion' , function(req, res){
	res.render('informacion', {
		title : 'Informacion'
		});
	});
	
app.get('/proveedores' , function(req, res){
	res.render('proveedores', {
		title : 'proveedores'  
		});
	});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
