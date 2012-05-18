//Author: Nick Clawson
//Date: 5/15/2012
//Assignment 3

//Fetches object from json.js
var grabData = function (json){
	var sithCult = [];
	for (var i = 0; i < json.sith.length; i++){
		var sithLord = json.sith[i];
		sithCult.push(sithLord);
	 };
	 
	 //returned array
	 return sithCult;
};

//array to hold json data, existing cult members
var sithCult = grabData(json);


};




alert("JavaScript works!");

