// Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.

// Four suits to represent the appearance (user interface - ui) for your cards
let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
console.log("Card Suits Example:", cardSuits); 


// card class

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}


// deck class

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
    }
}