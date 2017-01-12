var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour){
	alert("You found a match!");
}
else if (cardTwo !== cardFour){
	alert("Sorry, try again.")
};
if (cardOne === cardTwo){
	alert("You found a match!");
}
else if (cardTwo !== cardFour){
	alert("Sorry, try again.")
};


var deck = 4

function createCards () {
	for (var i = 0; i < deck; i++){
		var hereIsCard = document.createElement('div');
		hereIsCard.className = 'card';
		document.getElementById('game-board').appendChild(hereIsCard);
		}
};
createCards();

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

 function createBoard(){
 	for (var i = 0; i < cards.length; i ++){
 		cards.setAttribute("data-card", cards[i]);
 	}
 };

 function isTwoCards(){
 	cardsInPlay.push(this.getAttribute("data-card"));
 	if(cardsInPlay.length === 2){
 		isMatch(cardsInPlay);
 		cardsInPlay = [];
 	}
 };
 for(var i = 0; i < cards.length; i++){
 	cardElement.addEventListener("click", isTwoCards()(););
 	};



