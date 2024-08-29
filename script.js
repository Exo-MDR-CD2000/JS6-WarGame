// Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.



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
        this.cards = []; // initialize an empty array to store the cards
        this.createDeck(); // call the createDeck method to generate the deck of cards
    }

    
    createDeck() {
        const suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"]; // defines the card suites
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // 11=Jack, 12=Queen, 13=King, 14=Ace


        for (let suit of suits) { // for each suit
            for (let value of values) { // for each value
                this.cards.push(new Card(suit, value)); // create a new card object and add it to the deck 
            }
        }
    }


    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) { // iterate through the array backwards from last element to the first
            const j = Math.floor(Math.random() * (i + 1)); //  create a variable "j" that will be a random number between 0 and i
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // this will swap the elements at index i and j
        }
    }; 
    // the shuffling method is based on the Fisher-Yates algorithm


    // shuffled deck must now be dealt to the players
    deal() {
        return [this.cards.slice(0, 26), this.cards.slice(26, 52)]; // returns two arrays of 26 cards each (basically cut the deck in half using slice method then deal the cards)
    };
    
    
    
    
    
    
};


// player class












// game class







// Start the game
const game = new Game(); // create a new game instance
game.startGame(); // this will deal the cards to the players and start the game loop