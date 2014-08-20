/**
 * SETUP
 **/
  var app = app || {};

/**
 * MODELS
 **/


/**
 * VIEWS
 **/
  app.MessageView = Backbone.View.extend({
  	el: '#game',
  	player: 'me',
  	board: [-1, -1, -1, -1, -1, -1, -1, -1],
  	m: [-9, -9, -9, -9, -9, -9, -9, -9, -9],
    events: {
    	'click .grid': 'playRound'
    },
	changePlayer: function () {
		if (this.player === 'me') this.player = 'you';
		else this.player = 'me';
	},
	changeStatus: function () {
		m[idx] = (player === "me" ? 0 : 1);

		board[0] = m[0] + m[3] + m[6];
		board[1] = m[1] + m[4] + m[7];
		board[2] = m[2] + m[5] + m[8];
		board[3] = m[4] + m[6] + m[8];
		board[4] = m[3] + m[4] + m[5];
		board[5] = m[0] + m[1] + m[2];
		board[6] = m[0] + m[4] + m[8];
		board[7] = m[2] + m[4] + m[6];

		for (var i = 0; i < board.length; i++) {
			if (board[i] === 0 || board[i] === 3) alert(player + " wins");
		}

		console.log(m);		
	}
    playRound: function(e) {
    	if (this.player === 'me')
    		this.$el.find(e.target).html("O");
    	else	
    		this.$el.find(e.target).html("X");

    	this.changePlayer();
    }
  });

/**
 * BOOTUP
 **/
  $(document).ready(function() {
    app.messageView = new app.MessageView();
  });