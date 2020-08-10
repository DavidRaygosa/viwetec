'use strict'

var app = require('./app');
var port = 3700;
app.set('port', process.env.PORT || port)

app.listen(app.get('port'), () => 
{
		console.log("Servidor Corriendo Correctamente En Puerto: "+app.get('port'));
});