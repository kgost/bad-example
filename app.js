var express = require( 'express' ),
		app			= express();

app.set( 'view engine', 'ejs' );
app.set('port', ( process.env.PORT || 80 ) );
app.use( express.static( __dirname + '/inc' ) );

app.get( '/', function( req, res ) {
	res.render( 'index' );
} );

app.get( '/portfolio', function( req, res ) {
	res.render( 'portfolio' );
} );

app.get( '/services', function( req, res ) {
	res.render( 'services' );
} );

app.get( '/services/:service', function( req, res ) {
	res.render( req.params.service );
} );

app.post( '/services/build', function( req, res ) {
	
} );

app.post( '/services/networking', function( req, res ) {
	
} );

app.listen( app.get( 'port' ), function() {
  console.log( 'Node app is running on port', app.get( 'port' ) );
} );