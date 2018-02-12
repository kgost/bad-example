var express = require( 'express' ),
		app			= express();

app.set( 'view engine', 'ejs' );
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

app.listen( 3000, function() {
	console.log( 'Server Has Started' );
} );