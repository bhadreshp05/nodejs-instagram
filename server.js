// Grab the packages/variables we need
var express = require('express');
var app		= express();
var ig		= require('instagram-node').instagram();

// Configure the app
// tell the node where to look for site requests
app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Configure instagram app with client-id
ig.use({
	client_id: 'e95e8068418541cf9cf3b913d99c829c',
	client_secret: '4ab691602c284fb992a5203a093eebdd'
});
// we'll get this soon


// Set the routes
// home page route - popular images
app.get('/', function (req, res) {
	// use the instagram package to get popular media
	ig.media_popular(function (err, medias, remaining, limit) {
		// render the home page and pass in the popular images
		res.render('pages/index', { grams: medias });	
	});
});

// Start the server
app.listen(8080);
console.log('App started! Look at http:localhost:8080');