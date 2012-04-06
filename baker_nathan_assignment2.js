/*
Nathan Baker
04/04/2012
Deliverable 2
Cooking "Theme"
*/

var chef = "Nathan Bakers",
	recipe = "Famous Pork Ribs",
	temperature = 375,
	say = function(message) { console.log(message); };
;

//Function w/ 2 strings
var recipePrep = function () {
	var a = chef;
	var b = recipe;
	c = (a + " " + b);
	return c;
};

var c = recipePrep();
say(c);

say("Before we start cooking lets check to see if we have enough ingredients.");

// For Loop function
var amounts = ["6lbs ", "2 large ", "at least 22oz ", "8 cloves ", "assorted "
],
	ingredients = ["pork", "shallots", "beer", "garlic", "spices"
];
for (var i=0, j=ingredients.length; i < j; i++) {
	say( "You will need "+ amounts[i] + ingredients[i]);
};

say("Turn the oven on and pre-heat to 375f");

// while loop function
var temp = function (currentTemp) {
		while (currentTemp < 375)
		{currentTemp += 15};
		ovenTemp = "The oven is pre-heated to " + currentTemp;
		return ovenTemp;
};

var ovenTemp = temp(0);
say(ovenTemp);

say("Put pan of ingredients into the oven and bake for 3 hours");

//Boolean comparison
var isTender = function(temp, time) {
	if (temp>=375 && time>=3) {
	var cooked = "The ribs cooked at " + temp + "f, for " + time + "hours, and are ready to sauce.";
	return cooked
	}; 
		if (temp<375 || time<3);
		{
		var unCooked = "The ribs are not finished cooking"
		return unCooked
	};
};

var cooked = isTender(380, 4);
say(cooked || unCooked);

