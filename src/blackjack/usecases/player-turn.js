import { addPoints } from "./add-points";
import { askCard } from "./ask-card";
import { btnAskCard, btnStop, puntosHTML } from "./html-references";
import { pcTurn } from "./pc-turn";
import { showCards } from "./show-cards";

/**
 * The function when is the player's turn
 * @param {Array<String>} deck The deck with the current cards
 * @param {Array<Number>} playersPoints The points of each player
 * @param {Boolean} playerWins If the player is winning or not
 */
export const playerTurn = (deck, playersPoints, playerWins) => {
  //callback: Función que se manda como argumento
  const card = askCard(deck);
  playersPoints[0] = addPoints(playersPoints, 0, card);
  showCards(card, 0);

  if (playersPoints[0] > 21) {
    btnAskCard.disabled = true;
    btnStop.disabled = true;
    playerWins = false;
    pcTurn(deck, playersPoints, playerWins);
  } else if (puntosHTML[0] === 21) {
    btnAskCard.disabled = true;
    btnStop.disabled = true;
    pcTurn(deck, playersPoints, playerWins);
  }
};
