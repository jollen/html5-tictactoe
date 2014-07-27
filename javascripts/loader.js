require([
	/* by order */
	'javascripts/main.js'
], function () {
	console.log('Loaded.');
	$('.grid').playRound();
});