//Author: Nick Clawson
//Date: 5/15/2012
//Assignment 3

var cultMember = function (indx) {
	
	//set local json reference
	var member = json.sith[indx];
	
	
	//accessor for name, returns string
	var getName = function (){
		return member.name;
	};
	//accessor for capture status, returns boolean
	var getStatus = function (){
		return member.captured;
	};
	
	//accessor for cell number, returns number
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
		
	//accessor for weapon information, returns object
	var examineWeapon = function (){
		return member.lightsaber;
	};
	
	//mutator for capture status, alters boolean
	var setStatus = function (status){
		member.captured = status;
	};
	
	//mutator for prison cell information, alters number
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
		//returned methods
		"getName": getName,
		"getStatus": getStatus,
		"checkCell": checkCell,
		"examineWeapon": examineWeapon,
		"setStatus": setStatus,
		"assignCell": assignCell
	};
};

//global array
var allTargets = [
	teenal = cultMember(0),
	jax = cultMember(1),
	trick = cultMember(2),
	fanad = cultMember(3),
	nix = cultMember(4)
];

//function to determine remaining targets and return array
targetsLeft = function(targets){
	var left = [];
	while (left.length === 0){
		for (var i = 0; i < targets.length; i++){
			var name = targets[i].getName();
			if (targets[i].getStatus() === false){
				left.push(name);
			}
			else{
			
			};
		};
	};
	return left;
};

//output values
var remainingTargets = targetsLeft(allTargets);
console.log ("Remaining targets to capture: " + remainingTargets);
console.log(" ");

for (i = 0; i < allTargets.length; i++){
	var cultist = allTargets[i];
	console.log("name: " + cultist.getName() + ", currently captured: " + cultist.getStatus() 
				+ ", known weapon: " + cultist.examineWeapon() + ", cell number: " + cultist.checkCell() + ".");
	if (cultist.getStatus() === false){
		cultist.setStatus(true);
		cultist.assignCell(i + 3000);
		console.log (cultist.getName() + " has been captured and placed in cell " + cultist.checkCell() + ".");
	};
	console.log(" ");
	
};


alert("JavaScript works!");

