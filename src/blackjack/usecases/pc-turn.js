import { addPoints } from './add-points';
import { askCard } from './ask-card';
import { defineWinner } from './define-winner';
import { showCards } from './show-cards';

/**
 * This function is when the PC plays
 * @param {Array<String>} deck All the cards that remain in the deck
 * @param {Array<Number>} playersPoints An array with the points of every player (PC is the last position)
 * @param {boolean} playerWins If the player is winning or not
 */
export const pcTurn = (deck, playersPoints, playerWins) => {
  if (!playersPoints) throw new Error('playersPoints is necessary');
  if (!deck) throw new Error('deck is necessary');
  if (!playerWins) throw new Error('playerWins is necessary');

  do {
    //console.log(deck)
    const card = askCard(deck);
    //console.log({ card });
    addPoints(playersPoints, playersPoints.length - 1, card);
    showCards(card, playersPoints.length - 1);
  } while (
    playersPoints[playersPoints.length - 1] <= playersPoints[0] &&
    playersPoints[playersPoints.length - 1] < 21 &&
    playerWins === true
  );
  defineWinner(playersPoints, playerWins);
};
