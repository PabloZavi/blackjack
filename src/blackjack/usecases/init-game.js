import { createDeck } from './create-deck';
import {
  btnAskCard,
  btnStop,
  divPlayersCards,
  puntosHTML,
} from './html-references';

/**
 * We start the game
 * @param {Number} numPlayers The number of the players
 * @param {Array<String>} tipos Example: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specials Example: ['A', 'J', 'Q', 'K']
 * @returns
 */
export const initGame = (numPlayers = 2, tipos, specials) => {
  let deck = createDeck(tipos, specials);
  let playersPoints = [];
  for (let i = 0; i < numPlayers; i++) {
    playersPoints.push(0);
  }

  puntosHTML.forEach((elem) => (elem.innerText = 0));
  divPlayersCards.forEach((elem) => (elem.innerText = ''));
  btnAskCard.disabled = false;
  btnStop.disabled = false;
  let playerWins = true;
  return { deck, playersPoints, playerWins };
};
