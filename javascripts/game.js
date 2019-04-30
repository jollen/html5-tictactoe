define(['backbone'], function (Backbone) {

	var app = app || {};

	app.GameView = Backbone.View.extend({
		events: {
			'click .grid': 'playRound'
		},
		playRound: function() {
			var me = $(this),
				index = me.data('grid-no');

			if (player === 'me') {
				me.html("O");
			} else {
				me.html("X");
			}

			changeStatus(index);
			changePlayer();
		}
	});

});