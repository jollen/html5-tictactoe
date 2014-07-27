requirejs.config({
	baseUrl: 'bower_components/',
	paths: {
		'jquery': 'jquery/jquery.min'
	}
});

require([
	/* by order */
	'jquery',
	'bower_components/jquery-ui/ui/jquery-ui.js',
	'bower_components/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
	'javascripts/main.js'
], function () {
	console.log('Loaded.');
	$('.grid').playRound();
});