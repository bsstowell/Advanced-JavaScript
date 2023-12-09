let assert = require('chai').assert;

describe("Number Compare", function(){
	
     it("5 is strictly less than 6", function(){
        assert.isBelow(5, 6, '5 is less than 6');
    });

    it("4 is strictly greater than 3", function(){
        assert.isAbove(4, 3, '4 is greater than 3');
    });

    it("3 is equal to 3", function(){
        assert.equal(3, 3, 'same numbers they are equal');
    });

    it("please enter a number in value1", function(){
        let a;
        assert.isNotNumber(a, 'a is NaN');
    });

    it("please enter a number in value2", function(){
        let a;
        assert.isNotNumber(a, 'a is NaN');
    });

    it("please enter a number in value1", function(){
        assert.isNotNumber('', '"" is NaN');
    });

    it("please enter a number in value2", function(){
        assert.isNotNumber('', '"" is NaN');
    });

    it("-1 is strictly less than 5", function(){
        assert.isBelow(-1, 5, '5 is greater than -1');
    });

    it("34 is strictly greater than -30", function(){
        assert.isAbove(34, -30, '34 is greater than -30');
    });

    it("-5 is strictly greater than -6", function(){
        assert.isAbove(-5, -6, '-5 is greater than -6');
    });

    it("5 is strictly greater than 1", function(){
        assert.isAbove(5, 1, '5 is greater than 1');
    });

   it("1.5 is strictly less than 2", function(){
        assert.isBelow(1.5, 2, '1.5 is less than 2');
   });

   it("2 is strictly greater than 1.5", function(){
        assert.isAbove(2, 1.5, '2 is greater than 1.5');
   });

    it("please enter a number in value1", function(){
        assert.isNotNumber('3/4', '3/4 is NaN');
    });

    it("please enter a number in value1", function(){
        assert.isNotNumber('5b', '5b is NaN');
    });

    it("please enter a number in value2", function(){
        assert.isNotNumber('5b', '5b is NaN');
    });

});//end "Number Compare"


// Value1		value2		Expected Result
// 	5			6		6
// 	4			3		4
// 	3			3		"The amounts are equal"		They entered numbers, same numbers they are equal
// 	a			5		"Please enter a number in Value 1"
// 	5			a		"Please enter a number in Value 2"
// 	""			5		"Please enter a number in Value 1"
// 	5			""		"Please enter a number in Value 2"
// 	-1			5		5
// 	+34			-30		34
// 	-5			-6		-5
// 	5			-1		5
// 	1.5			2		2
// 	2			1.5		2
// 	3/4			1		"Please enter a number in Value 1"	Fractions are not integers or decimal numbers
// 	5b			3		"Please enter a number in Value 1"
// 	3			5b		"Please enter a number in Value 2"
// 	""			5		"Please enter a number in Value 1"
// 	5			""		"Please enter a number in Value 2"