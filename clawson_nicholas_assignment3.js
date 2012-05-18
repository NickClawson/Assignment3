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
	
	//mutator for cell information
	var assignCell = function (cellNumber){
		if (member.captured === false){
			console.log(member.name + " has not been captured yet!");
		}
		else{
			if (member.cell === ""){
				member.cell = cellNumber;
			}
			else{
				console.log(member.name + " already has a cell!");
			}
		};
	};
	
	return {
		"getName": getName,
		"getStatus": getStatus,
		"checkCell": checkCell,
		"examineWeapon": examineWeapon,
		"setStatus": setStatus,
		"assignCell": assignCell
	};
};

var teenal = cultMember(0),
	jax = cultMember(1),
	trick = cultMember(2),
	fanad = cultMember(3),
	nix = cultMember(4);



alert("JavaScript works!");

