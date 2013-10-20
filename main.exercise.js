var gameModule = (function ($) {
	var player = 'me';

	function changePlayer() {
		if (player === 'me') player = 'you';
		else player = 'me';
	}

	function changeStatus(idx) {	
	}

	$.fn.playRound = function () {
		this.on('click', function(){
			var me = $(this),
				index = me.data('grid-no');

			if (player === 'me') {
				me.html("O");
			} else {
				me.html("X");
			}

			changeStatus(index);
			changePlayer();
		})
	}
})($);