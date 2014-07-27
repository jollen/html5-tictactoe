requirejs.config({
	baseUrl: 'bower_components/',
	paths: {
		'jquery': 'jquery/jquery.min',
		'backbone': 'backbone/backbone',
		'underscore': 'underscore/underscore'
	},
   	shim: {
	    'backbone': {
	        deps: ['jquery', 'underscore'],
	        exports: 'Backbone'
	    }
    }
});

require([
	/* by order */
	'jquery',
	//'bower_components/jquery-ui/ui/jquery-ui.js',
	//'bower_components/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
	'backbone',
	'javascripts/main.js'		// Game module
], function () {

});