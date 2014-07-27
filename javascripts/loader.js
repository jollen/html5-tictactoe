requirejs.config({
	baseUrl: 'bower_components/',
	paths: {
		'jquery': 'jquery/jquery.min',
		'backbone': 'backbone/backbone',
		'underscore': 'underscore/underscore'
	},
   	shim: {
	    'backbone': {
	        deps: ['jquery', 'underscore']
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
	var app = app || {};

	app.GameView = Backbone.View.extend({
		el: '#gameBoard',
		events: {
			'click .grid': 'playRound'
		},
        playRound: function (e) {
			var me = this.$el.find(e.target),
				index = me.data('grid-no');

			if (gameModule.getPlayer() === 'me') {
				me.html("O");
			} else {
				me.html("X");
			}

			gameModule.changeStatus(index);
			gameModule.changePlayer();
        }
	});

	app.gameView = new app.GameView();
});