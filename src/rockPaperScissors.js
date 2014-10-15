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
	
	return findWinner(findRule(this.winner))

	function findWinner(remainingRules) {
		winner = remainingRules.filter(function (rule) { return rule.indexOf(gestureOne) != -1 })
		return winner[0][2]
	}
	
	function findRule(rules) {
		return rules.filter(function(rule){ return rule.indexOf(gestureTwo) != -1 }).map( function(rule) { return rule })
	}

}