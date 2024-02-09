import { divPlayersCards } from './html-references';

/**
 * This function shows the request card in the player's div
 * @param {String} card The card to be showed
 * @param {Number} player The player who is playing at the moment
 */
export const showCards = (card, player) => {
  if (!card) throw new Error('The card is necessary');
  if (isNaN(player)) throw new Error('The player is necessary');

  const img = document.createElement('img');
  img.classList.add('cartas');
  img.src = `assets/cartas/${card}.png`;
  img.alt = `${card}`;
  divPlayersCards[player].append(img);
};
