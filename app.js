var uCard = 0
var cCard = 0
function run() {
    document.getElementById("b").style.transitionDuration = "1s";
    document.getElementById("b").style.left = "0px";
    document.getElementById("b").style.top = "0px";
    document.getElementById("b").style.width = "100%";
    document.getElementById("b").style.transform = "translateX(0px)";

	//botton C
	document.getElementById("c").style.left = "0px"
	document.getElementById("c").style.top = "0px"
	document.getElementById("c").style.display = "block";
	document.getElementById("c").disabled = false;


	//counter 
	document.getElementById("counter").style.top = "0px";
	document.getElementById("counter").style.right = "0px"
	document.getElementById("counter").style.display = "block";

	//stopdraw
	document.getElementById("stop").style.top = "0px";
	document.getElementById("stop").style.left = " 240px";
	document.getElementById("stop").style.display = "block";
}
// After
function suit(){
	var suitArray = ["C","D","H","S"]
    var randSuit = Math.floor(Math.random() * 4)
	var suitResult = suitArray[randSuit]
	return suitResult;
}

function getUserCard() {
    var randUserNum = Math.floor(Math.random() * 10) + 1
	uCard = uCard + randUserNum
	document.getElementById("UCounter").innerHTML = uCard 
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=image/" + randUserNum + suit() + ".jpg>" )
} 

function getCompCard() {
	do {	
		var randCompNum = Math.floor(Math.random() * 10) + 1
		cCard = cCard + randCompNum
		document.getElementById("").innerHTML = cCard
		document.getElementById("").insertAdjacentHTML("beforeend", "<img src=image/" + randCompNum + suit() + ".jpg>" )
	} while (cCard <= 15)
}

function game(){
	getUserCard();
}

<<<<<<< HEAD
function btnDisable() {
=======
function btnDisable(){
>>>>>>> fff99efc5700c24ee0a0a30dbb6392e16eac1f3e
	game = null
}









/*
function userFun() {
	var userTotal = 0;
	var stand = "y";
    do {
		userTotal = userTotal + getUserCard();
		stand = prompt(`You currently have ${userTotal}. Enter "y" to keep drawing cards and "n" to stand and stop drawing.`);
		
	} while ((stand == "y") && (stand != "n"));
	return userTotal;
}

function getCompCard() {
    var randCompNum = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C","D","H","S"]
    var randSuit = Math.floor(Math.random() * 4)
    document.getElementById("cardComp").innerHTML = "<img src=images/" + randNum + suitArray[randSuit] + ".jpg>" 
    return randCompNum
} 

function comFun() {
	var compTotal = 0;
    do {
		compTotal = compTotal + getCompCard();
		alert(`The computer has ${compTotal}`)
	} while ( compTotal <= 15);
	return compTotal;
}
function compNum(com, user) {
    if (user == com){
		alert(`You has ${user} and the computer has ${com}. The round is tied No-one wins!`);
		
	}
	if (user > 20){
		alert(`You went over with ${user}`);
		compwin = "y"
		userwin = "n"
	}
	if (com > 20){
		alert(`The computer went over with ${com}`);
		userwin = "y"
		compwin = "n"
	}
	if ((user > com) && (user <= 20)){
		alert(`You win! You had ${user} and the computer had ${com}`)
		userwin = "y"
		compwin = "n"
	}
	if ((com > user) && (com <= 20)){
		alert(`Sorry the computer won with ${com}, and You lost with ${user}`)
		compwin = "y"
		userwin = "n"
	}
	if (userwin == "y") {
		wins = wins + 1
	} 
	if (compwin == "y"){
		losses = losses + 1
	}
}

function game() {
	do{
		retry = "n";
		compNum( comFun(), userFun() );
		alert(`You currently have won ${wins} matches and the computer has won a total of ${losses} times`)
		retry = prompt(`Do you want to play again? Type "y" retry or "n" to stop`)
	}while(retry == "y")
}
*/