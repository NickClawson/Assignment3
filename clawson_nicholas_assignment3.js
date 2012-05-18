//Author: Nick Clawson
//Date: 5/15/2012
//Assignment 3

var cultMember = function (indx) {
	
	//set json reference
	var member = json.sith[indx];
	
	//accessor for name
	var getName = function (){
		return member.name;
	};
		//accessor for capture status
	var getStatus = function (){
		return member.captured;
	};
	
	//accessor for cell number
	var checkCell = function (){
		if (member.cell === ""){
			if (member.captured === false){
				return member.name + " is still at large.";
			}
			else{
				return member.name + " has not been assigned a cell yet."
			};
		}
		else{
			return member.cell;
		};
	};
		
	//accessor for weapon information
	var examineWeapon = function (){
		return member.lightsaber;
	};
	
	//mutator for capture status
	var setStatus = function (status){
		member.captured = status;
	};
	
	return {
		"getName": getName,
		"getStatus": getStatus,
		"checkCell": checkCell,
		"examineWeapon": examineWeapon,
		"setStatus": setStatus
	};
};

var teenal = cultMember(0),
	jax = cultMember(1),
	trick = cultMember(2),
	fanad = cultMember(3),
	nix = cultMember(4);
console.log(nix);
nix;
console.log(nix);

alert("JavaScript works!");

