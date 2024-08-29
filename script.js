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

// two players will be playing the game. Each player will have a name, a hand of cards, and a score.
// the game class will create two player instances and manage the game flow.

class Player {
    constructor(name) {
        this.name = name; // player's name
        this.hand = []; // player's hand
        this.score = 0; // player's score
    }

    playCard() {
        return this.hand.shift(); // Remove and return the top card from the player's hand. shift method removes the first element from an array and returns it
    }

    incrementScore() {
        this.score += 1; // increments the player's score by 1
    }
}




// game class

class Game {
    constructor() {
        this.player1 = new Player("Player 1"); // creates player 1 instance
        this.player2 = new Player("Player 2"); // creates player 2 instance
        this.deck = new Deck(); // creates a deck instance. calls the deck class to create a deck of cards
    }


    // players are created and decks are made. Now we need to start the game by shuffling the deck and dealing the cards to the players.


    startGame() {
        this.deck.shuffle(); // shuffle the deck of cards
        const [hand1, hand2] = this.deck.deal(); // deal the cards to the players
        this.player1.hand = hand1; // set player 1's hand
        this.player2.hand = hand2; // set player 2's hand
    };






}







// Start the game
const game = new Game(); // create a new game instance
game.startGame(); // this will deal the cards to the players and start the game loop