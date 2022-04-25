var uCard = 0
var cCard = 0
var compwin
var userwin
var wins
var losses

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


	//counter user
	document.getElementById("counter").style.top = "0px";
	document.getElementById("counter").style.right = "0px"
	document.getElementById("counter").style.display = "block";

	//counter computer
	document.getElementById("counter2").style.top = "0px";
	document.getElementById("counter2").style.right = "240px"
	document.getElementById("counter2").style.display = "block";


	//stopdraw
	document.getElementById("stop").style.top = "0px";
	document.getElementById("stop").style.left = " 240px";
	document.getElementById("stop").style.display = "block";

	//Bottom Textbox
	document.getElementById("bt").style.bottom = "0px"
	document.getElementById("bt").style.left = "0px"
	document.getElementById("bt").style.width = "100%"
	document.getElementById("bt").style.display = "block";
}
// After

function suit(){
	var suitArray = ["C","D","H","S"]
    var randSuit = Math.floor(Math.random() * 4)
	var type = suitArray[randSuit]
	return type
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
		console.log(cCard)
		document.getElementById("CCounter").innerHTML = cCard
		document.getElementById("compCard").insertAdjacentHTML("beforeend", "<img src=image/" + randCompNum + suit() + ".jpg>" )
	} while (cCard <= 15)
}

function UserTurn(){
	getUserCard();
}
function CompTurn(){
	getCompCard();
	compNum(cCard, uCard);
	getCompCard = null
}

function btnDisable() {
	UserTurn = null
}

function compNum(cCard, uCard) {
    if (uCard == cCard){
		document.getElementById("bt").innerHTML = `You have ${uCard} and the computer has ${cCard}. The round is tied No-one wins!`;
		
	}
	if (uCard > 20){
		document.getElementById("bt").innerHTML = `You went over with ${uCard}`;
		compwin = "y"
		userwin = "n"
	}
	if (cCard > 20){
		document.getElementById("bt").innerHTML = `The computer went over with ${cCard}`;
		userwin = "y"
		compwin = "n"
	}
	if ((uCard >= 20) && (cCard >= 20)){
		document.getElementById("bt").innerHTML = `You have ${uCard} and the computer has ${cCard}. You both went over! The round is tied No-one wins!`;
		
	}
	if ((uCard > cCard) && (uCard <= 20)){
		document.getElementById("bt").innerHTML = `You win! You had ${uCard} and the computer had ${cCard}`;
		userwin = "y"
		compwin = "n"
	}
	if ((cCard > uCard) && (cCard <= 20)){
		document.getElementById("bt").innerHTML = `Sorry the computer won with ${cCard}, and You lost with ${uCard}`;
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











/*
function
	do{
		retry = "n";
		compNum( comFun(), userFun() );
		alert(`You currently have won ${wins} matches and the computer has won a total of ${losses} times`)
		retry = prompt(`Do you want to play again? Type "y" retry or "n" to stop`)
	}while(retry == "y")
}

function comFun() {
	var compTotal = 0;
    do {
		compTotal = compTotal + getCompCard();
		alert(`The computer has ${compTotal}`)
	} while ( compTotal <= 15);
	return compTotal;
}

*/