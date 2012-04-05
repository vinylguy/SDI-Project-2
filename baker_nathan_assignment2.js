/*
Nathan Baker
04/04/2012
Deliverable 2
Cooking "Theme"
*/

var ingredients = ["pork", "shallots", "beer", "garlic", "spices"],
	chef = "Nathan Baker",
	recipe = "'Famous Pork Ribs'",
	temperature = 375
;




// while loop function 
console.log("Turn the oven on and pre-heat to 375f");

var temp = function (currentTemp) {
		while (currentTemp < 375)
		{currentTemp += 15};
		console.log("Current oven temp is: " + currentTemp);
};

temp(0);

console.log("The oven is pre-heated to the desired temperature.");

// For Loop function
//for (var temp = 375; temp > 0; temp+=15) {};

var tender = [true, false];


/* var chef = "Nathan Baker"
	recipe = '"Famous Pork Ribs"',
	temp = 375,
	tender = true,
	ingredients = true
;	

console.log("Let's get started making a great meal, Nates " + recipe);
console.log("Our chef today is Nathan Baker", "and I'm going to walk you through making my ribs.");

if (chef === "Nathan Baker") {
	console.log("You may proceed with the recipe.");
	if (ingredients === true) {
		console.log("Looks like we have all of our ingredients.",
			"Sweet, now we can start to cook our " + recipe);
		if (temp >= 375) {
			console.log("Oven is hot and ready to go. Cook for 3 hours or until tender.");
			if (tender === true) {
				console.log("Smother ribs in bbq sauce and enjoy!");
			} else {
				console.log("Put back in the oven to cook longer.");
			};
		} else {
			console.log("Preheat oven to 375f.");
		};
	} else {
		console.log("Darn it, back to the store.");
	};
} else {
	console.log("Stop! Only Nathan Baker is allowed to make these!");
};

*/