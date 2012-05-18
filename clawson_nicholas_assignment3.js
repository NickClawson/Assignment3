//Author: Nick Clawson
//Date: 5/15/2012
//Assignment 3

var cultMember = function (indx) {
	
	//set json reference
	var member = json.sith[indx];
	
	//accessor for name
	var getName = function (){
		return member.name;
	}
	
	return {
		"getName": getName
		
	};
};

var teenal = cultMember(0),
	jax = cultMember(1),
	trick = cultMember(2),
	fanad = cultMember(3),
	nix = cultMember(4);


alert("JavaScript works!");

