# JS6-WarGame
A game of war in browser console

## Description

The goal was to recreate the game of War using Javascript OOP concepts and then have the game be played out automatically in the browser console. The rules are a modified version of game, as we had to follow these guidelines:

1. Deal 26 Cards to each Player from a Deck of 52 cards.
2. Iterate through the turns where each Player plays a Card.
3. The Player who played the higher card is awarded a point.
    - Ties result in zero points for both Players.
4. After all cards have been played, display the score and declare the winner.

Jokers are not included in the deck and the values go from 2-14. Card faces are implemented for Jacks, Kings, Queens, and Aces. The player names are pre-assigned and cannot be changed for simplicity sake. Upon loading the page, the browser will show an alert pop up displaying the results of the game and the winner. Viewing the browser console will show each round, each card dealt, and the winner for each round. A new game can be created by refreshing the browser page. One of the more challenging aspects was understanding a method for shuffling the deck. I cam across the Fisher-Yates shuffle and some examples on how to implement it with JS.


## Usage

Clone the repo and open a live server in VS code. You can play the game in VS terminal or through the browser. Alternatively, you can click on the deployed link to the right or down below:

- [Deployed Link](WIP)

## Link(s)

- [Github Repo](https://github.com/Exo-MDR-CD2000/JS6-WarGame)

## Credits

- Independent research and Promineo Bootstrap videos.
- [Stack Overflow - How to Fisher-Yates shuffle a JavaScript array?](https://stackoverflow.com/questions/59810241/how-to-fisher-yates-shuffle-a-javascript-array)
- [Fisher Yates Shuffle](https://medium.com/@omar.rashid2/fisher-yates-shuffle-a2aa15578d2f)