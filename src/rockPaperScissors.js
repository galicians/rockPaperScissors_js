function Rock() {
	this.type = Rock
}

function Paper() {
	this.type = Paper
}

function Scissors() {
	this.type = Scissors
}

function Rules() {
	this.winner = [[rock,paper,'paper covers rock'],
					[rock,scissors,'rock crushes scissors'],
					[paper,scissors,'scissors cut paper']]

}
function Draw() {}

Rules.prototype.theWinnerIs = function(gestureOne, gestureTwo) {
	if (gestureOne === gestureTwo) return new Draw
	result = this.winner.filter(function (z) { return z.indexOf(gestureOne) != -1 }).filter(function (y) {return y.indexOf(gestureTwo) != -1 }).map( function(x) { return x})
	return result[0][2]
	
	// function findGestures(rules) {
	// 	return rules.filter(function(y){return y.indexOf(gestureTwo) != -1 }).map( function(x) { return x})
	// }

	

}