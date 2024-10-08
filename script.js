
// card class

class Card {
    constructor(suit, value, name = null) { // the constructor takes in the suit, value, and name of the card (name is optional) name is set to null by default to handle the case where the card does not have a name
        this.suit = suit;
        this.value = value;
        this.name = name;
    }
    getValue() {
        return this.value; // this will simplify the playRound method in the Game class because we can compare the values of the cards directly
    }
    getName() {
        return this.name ? this.name : this.value; // this will return the name of the card if it exists, otherwise it will return the value of the card
    }
}


// deck class

class Deck {
    constructor() {
        this.cards = []; // initialize an empty array to store the cards
        this.createDeck(); // call the createDeck method to generate the deck of cards
    }


    createDeck() {
        const suits = [`Spades 🗡️`, `Hearts ❤️`, `Diamonds 💎`, `Clubs 🍀`]; // defines the card suites
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // 11=Jack, 12=Queen, 13=King, 14=Ace
        const names = {11: `Jack`, 12: `Queen`, 13: `King`, 14: `Ace`}; // names of the cards


        for (let suit of suits) { // for each suit
            for (let value of values) { // for each value
                const name = names[value] || null; // get the name of the card. if the card does not have a name, set it to null
                this.cards.push(new Card(suit, value, name)); // create a new card object and add it to the deck.
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
        this.player1 = new Player(`Player 1`); // creates player 1 instance
        this.player2 = new Player(`Player 2`); // creates player 2 instance
        this.deck = new Deck(); // creates a deck instance. calls the deck class to create a deck of cards
    }


    // players are created and decks are made. Now we need to start the game by shuffling the deck and dealing the cards to the players.


    startGame() {
        this.deck.shuffle(); // shuffle the deck of cards
        const [hand1, hand2] = this.deck.deal(); // deal the cards to the players
        this.player1.hand = hand1; // set player 1's hand
        this.player2.hand = hand2; // set player 2's hand
    };


    // cards have been dealt to player's hands. implement game logic next.

    
    // This function is a bit simpler as we are comparing the values of the cards directly. The getValue method in the Card class makes this possible.
    playRoundNew() {
        for (let i = 0; i < 26; i++) { // 26 rounds of the game since each player has 26 cards
            console.log(`*Round ${i + 1}*`); // log the round number
            
            const card1 = this.player1.playCard(); // player 1 plays a card
            const card2 = this.player2.playCard(); // player 2 plays a card

            console.log(`${this.player1.name} plays ${card1.getName()} of ${card1.suit}`); // log player 1's card
            console.log(`${this.player2.name} plays ${card2.getName()} of ${card2.suit}`); // log player 2's card

            if (card1.getValue() > card2.value) { // compare the values of the cards using the getValue method
                console.log(`${this.player1.name} wins the round!`); // logs player 1 wins the round
                this.player1.incrementScore(); // increase player 1's score
            } else if (card1.getValue() < card2.value) { // if player 2's card is greater than player 1's card
                console.log(`${this.player2.name} wins the round!`); // player 2 wins the round
                this.player2.incrementScore(); // increment player 2's score
            } else {
                console.log(`It's a tie!`);
            }
            console.log(`Current Scores: ${this.player1.name}: ${this.player1.score} | ${this.player2.name}: ${this.player2.score}`); // log the current scores
            console.log(`------------------------------------------------`); // add a space between each round
        }
    }

    // now that the game logic is made, we need to determine a winner after all the rounds are played.
    playerWinner() {
        console.log(`==================== Final Results ====================`); // log the final results
        console.log(`${this.player1.name} scored: ${this.player1.score}`); // log player 1's score
        console.log(`${this.player2.name} scored: ${this.player2.score}`); // log player 2's score

        // make a comparison between the scores of the two players to determine the winner
        
        let winnerMessage; // create a variable to store the winner message
        if (this.player1.score > this.player2.score) { // compares player 1's score to player 2's score
            winnerMessage = `${this.player1.name} wins the game!`; // player 1 wins the game
            console.log(`${this.player1.name} wins the game!`); // log the winner
        } else if (this.player1.score < this.player2.score) { // compares player 2's score to player 1's score
            winnerMessage = `${this.player2.name} wins the game!`; // player 2 wins the game
            console.log(`${this.player2.name} wins the game!`); // log the winner
        } else {
            winnerMessage = `The game is a tie!`; // the game is a tie
            console.log(`The game is a tie!`); // log the tie
        }

        const finalMessage = "-- Final Results --\n\n" +
        this.player1.name + " scored: " + this.player1.score + "\n" +
        this.player2.name + " scored: " + this.player2.score + "\n\n" +
        winnerMessage; // concatenate the final message

        // display final message results
        console.log(`Note: 11=Jack, 12=Queen, 13=King, 14=Ace`); // log the values of the cards
        alert(finalMessage);
    };



    // the game is ready to be played. We need to start the game by calling the startGame method and then play the rounds and determine the winner.
    playGame() {
        this.startGame(); // start the game
        this.playRoundNew(); // play the rounds
        this.playerWinner(); // determine the winner
    };
    
};


// Start the game
const game = new Game(); // create a new game instance
game.playGame(); // this will deal the cards to the players and start the game loop