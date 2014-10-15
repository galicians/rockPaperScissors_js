

describe("rock paper scissors game", function() {


	describe("In the gestures", function() {

		beforeEach(function() {
		rock = new Rock
		paper = new Paper
		scissors = new Scissors
		rules = new Rules 
		})

		it("should be a rock", function() {
			expect(rock.type).toEqual(Rock)
		})

		it("should be a paper", function() {
			expect(paper.type).toEqual(Paper)
		})

		it("should be scissors", function() {
			expect(scissors.type).toEqual(Scissors)
		})
	})


	describe("The rules are", function() {

		beforeEach(function() {
		rock = new Rock
		paper = new Paper
		scissors = new Scissors
		rules = new Rules
		draw = new Draw
		})


		it("rock should win over scissors", function() {
			expect(rules.theWinnerIs(scissors, rock)).toEqual('rock crushes scissors')
		})

		it("paper should win over rock", function() {
			expect(rules.theWinnerIs(rock, paper)).toEqual('paper covers rock')
		})

		it("should return draw in both gestures are equal", function() {
			expect(rules.theWinnerIs(rock,rock)).toEqual(draw)
		})
	
	})




})